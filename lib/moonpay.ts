/**
 * MoonPay Integration Module
 * 
 * This module handles the initialization and configuration of the MoonPay SDK
 * for purchasing Solana (SOL) directly to a user's wallet address.
 */

import { MoonPayWebSdk } from '@moonpay/moonpay-js';

/**
 * Interface for MoonPay widget configuration
 */
interface MoonPayConfig {
    walletAddress: string;
    currencyCode?: string;
    baseCurrencyCode?: string;
}

/**
 * Opens the MoonPay widget to purchase SOL
 * 
 * @param config - Configuration object containing wallet address and optional currency codes
 * @throws Error if API key is not configured or widget fails to load
 */
export async function openMoonPayWidget(config: MoonPayConfig): Promise<void> {
    // Validate API key
    const apiKey = process.env.NEXT_PUBLIC_MOONPAY_API_KEY;

    if (!apiKey) {
        throw new Error('MoonPay API key is not configured. Please set NEXT_PUBLIC_MOONPAY_API_KEY in your environment variables.');
    }

    try {
        // Initialize MoonPay SDK
        const moonPaySdk = new MoonPayWebSdk({
            flow: 'buy',
            environment: 'production', // Use 'sandbox' for testing
            params: {
                apiKey,
                // Currency to purchase (Solana)
                currencyCode: config.currencyCode || 'SOL',
                // Base currency (USD)
                baseCurrencyCode: config.baseCurrencyCode || 'usd',
                // User's wallet address where SOL will be sent
                walletAddress: config.walletAddress,
                // Optimize for mobile/Telegram
                theme: 'dark',
                colorCode: '#9945FF', // Solana brand color
            },
        });

        // Open the widget
        moonPaySdk.show();
    } catch (error) {
        console.error('MoonPay widget error:', error);
        throw new Error(`Failed to open MoonPay widget: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

/**
 * Validates a Solana wallet address
 * Basic validation - checks length (Solana addresses are typically 32-44 characters)
 * 
 * @param address - The wallet address to validate
 * @returns true if the address appears valid
 */
export function isValidSolanaAddress(address: string): boolean {
    // Basic validation: Solana addresses are base58 encoded and typically 32-44 characters
    const trimmedAddress = address.trim();

    if (!trimmedAddress) {
        return false;
    }

    // Check length
    if (trimmedAddress.length < 32 || trimmedAddress.length > 44) {
        return false;
    }

    // Check for valid base58 characters (no 0, O, I, l)
    const base58Regex = /^[1-9A-HJ-NP-Za-km-z]+$/;
    return base58Regex.test(trimmedAddress);
}
