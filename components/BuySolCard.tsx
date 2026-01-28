'use client';

/**
 * BuySolCard Component
 * 
 * Main UI component for the Telegram Mini App that allows users to
 * purchase Solana (SOL) using MoonPay by entering their wallet address.
 */

import { useState } from 'react';
import { openMoonPayWidget, isValidSolanaAddress } from '@/lib/moonpay';

export default function BuySolCard() {
    const [walletAddress, setWalletAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    /**
     * Handles the purchase flow when user clicks "Buy SOL"
     */
    const handleBuySol = async () => {
        // Clear previous errors
        setError('');

        // Validate wallet address
        if (!walletAddress.trim()) {
            setError('Please enter your Solana wallet address');
            return;
        }

        if (!isValidSolanaAddress(walletAddress)) {
            setError('Please enter a valid Solana wallet address (32-44 characters)');
            return;
        }

        try {
            setIsLoading(true);

            // Open MoonPay widget
            await openMoonPayWidget({
                walletAddress: walletAddress.trim(),
                currencyCode: 'SOL',
                baseCurrencyCode: 'usd',
            });

            // Widget opened successfully
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError(
                err instanceof Error
                    ? err.message
                    : 'Failed to open payment widget. Please try again.'
            );
        }
    };

    return (
        <div className="w-full max-w-md">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Buy SOL Instantly
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Purchase Solana securely with MoonPay
                    </p>
                </div>

                {/* Wallet Address Input */}
                <div className="mb-6">
                    <label
                        htmlFor="wallet-address"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Solana Wallet Address
                    </label>
                    <input
                        id="wallet-address"
                        type="text"
                        value={walletAddress}
                        onChange={(e) => {
                            setWalletAddress(e.target.value);
                            setError(''); // Clear error on input
                        }}
                        placeholder="Enter your SOL wallet address"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        disabled={isLoading}
                    />

                    {/* Error Message */}
                    {error && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                            {error}
                        </p>
                    )}
                </div>

                {/* Buy Button */}
                <button
                    onClick={handleBuySol}
                    disabled={!walletAddress.trim() || isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none shadow-lg"
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center">
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Opening MoonPay...
                        </span>
                    ) : (
                        'Buy SOL'
                    )}
                </button>

                {/* Security Notice */}
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
                    🔒 Payments are processed securely by MoonPay
                </p>
            </div>
        </div>
    );
}
