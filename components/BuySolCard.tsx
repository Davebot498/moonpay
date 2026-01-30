'use client';

/**
 * BuySolCard Component
 * 
 * Main UI component for the Telegram Mini App that allows users to
 * purchase Solana (SOL) using Alchemy Pay by entering their wallet address.
 */

import { useState } from 'react';
import { getAlchemyPayUrl, isValidSolanaAddress } from '@/lib/alchemypay';

export default function BuySolCard() {
    const [walletAddress, setWalletAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    /**
     * Handles the purchase flow when user clicks "Buy SOL"
     */
    const handleBuySol = () => {
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

            // Generate Alchemy Pay URL
            const checkoutUrl = getAlchemyPayUrl({
                walletAddress: walletAddress.trim(),
                crypto: 'SOL',
                network: 'SOLANA',
                fiat: 'NGN',
            });

            // Redirect to Alchemy Pay
            window.location.href = checkoutUrl;

        } catch (err) {
            setIsLoading(false);
            setError(
                err instanceof Error
                    ? err.message
                    : 'Failed to initiate payment. Please try again.'
            );
        }
    };

    return (
        <div className="w-full max-w-md perspective-1000">
            <div className="relative group">
                {/* Background Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/30 overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>

                    {/* Header */}
                    <div className="text-center mb-8 relative">
                        <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-[#9945FF]/10 to-[#14F195]/10 mb-4 border border-purple-500/20 shadow-inner">
                            <svg className="w-10 h-10" viewBox="0 0 397 311" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.6 237.9c2.4 2.4 5.7 3.7 9.2 3.7h314.8c5.8 0 8.7-7 4.6-11.1l-64.6-64.6c-2.4-2.4-5.7-3.7-9.2-3.7H4.6c-5.8 0-8.7 7-4.6 11.1l64.6 64.6z" fill="url(#sol_grad_1)" />
                                <path d="M323.4 73.2c-2.4-2.4-5.7-3.7-9.2-3.7H9.4c-5.8 0-8.7 7-4.6 11.1l64.6 64.6c2.4 2.4 5.7 3.7 9.2 3.7h314.8c5.8 0 8.7-7 4.6-11.1l-64.6-64.6z" fill="url(#sol_grad_2)" />
                                <path d="M323.4 241.6c-2.4-2.4-5.7-3.7-9.2-3.7H9.4c-5.8 0-8.7 7-4.6 11.1l64.6 64.6c2.4 2.4 5.7 3.7 9.2 3.7h314.8c5.8 0 8.7-7 4.6-11.1l-64.6-64.6z" fill="url(#sol_grad_3)" />
                                <defs>
                                    <linearGradient id="sol_grad_1" x1="0" y1="0" x2="397" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#9945FF" />
                                        <stop offset="1" stopColor="#14F195" />
                                    </linearGradient>
                                    <linearGradient id="sol_grad_2" x1="0" y1="0" x2="397" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#9945FF" />
                                        <stop offset="1" stopColor="#14F195" />
                                    </linearGradient>
                                    <linearGradient id="sol_grad_3" x1="0" y1="0" x2="397" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#9945FF" />
                                        <stop offset="1" stopColor="#14F195" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white mb-2 tracking-tight">
                            Buy SOL Instantly
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                            Secure non-custodial purchase via <span className="text-purple-600 dark:text-purple-400 font-semibold">Alchemy Pay</span>
                        </p>
                    </div>

                    {/* Wallet Address Input */}
                    <div className="mb-6 relative">
                        <label
                            htmlFor="wallet-address"
                            className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 ml-1"
                        >
                            Solana Wallet Address
                        </label>
                        <div className="relative group/input">
                            <input
                                id="wallet-address"
                                type="text"
                                value={walletAddress}
                                onChange={(e) => {
                                    setWalletAddress(e.target.value);
                                    setError(''); // Clear error on input
                                }}
                                placeholder="Paste your wallet address..."
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 font-mono text-sm shadow-inner"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mt-3 flex items-start gap-2 text-red-500 dark:text-red-400 animate-in fade-in slide-in-from-top-1 duration-300">
                                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs font-medium leading-relaxed">
                                    {error}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Buy Button */}
                    <button
                        onClick={handleBuySol}
                        disabled={!walletAddress.trim() || isLoading}
                        className="relative w-full group/btn overflow-hidden rounded-xl p-[1px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-[0.98]"
                    >
                        {/* Shimmer Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600 bg-[length:200%_100%] animate-shimmer group-hover/btn:animate-shimmer-fast"></div>

                        <div className="relative bg-gray-900 dark:bg-black py-4 px-6 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-transparent">
                            <span className="text-white font-bold tracking-wide flex items-center gap-2">
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <span className="animate-pulse">Connecting...</span>
                                    </>
                                ) : (
                                    <>
                                        BUY SOL
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </span>
                        </div>
                    </button>

                    {/* Security Notice */}
                    <div className="mt-8 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700/50 text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-center">
                            Payments processed by Alchemy Pay
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
