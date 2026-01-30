/**
 * Alchemy Pay Integration Module
 * 
 * This module handles the generation of the Alchemy Pay On-Ramp URL
 * for purchasing Solana (SOL) directly to a user's wallet address.
 */

interface AlchemyPayConfig {
    walletAddress: string;
    crypto?: string;
    network?: string;
    fiat?: string;
}

/**
 * Generates the Alchemy Pay On-Ramp URL
 * 
 * @param config - Configuration object containing wallet address
 * @returns The fully constructed URL for the Alchemy Pay checkout
 */
export function getAlchemyPayUrl(config: AlchemyPayConfig): string {
    const appId = process.env.NEXT_PUBLIC_ALCHEMY_PAY_APP_ID;
    const env = process.env.NEXT_PUBLIC_ALCHEMY_PAY_ENV || 'test';

    // Base URL depends on environment
    const baseUrl = env === 'production'
        ? 'https://ramp.alchemypay.org'
        : 'https://ramptest.alchemypay.org';

    if (!appId) {
        console.warn('Alchemy Pay App ID is missing. Please set NEXT_PUBLIC_ALCHEMY_PAY_APP_ID.');
    }

    const params = new URLSearchParams({
        appId: appId || '',
        crypto: config.crypto || 'SOL',
        network: config.network || 'SOLANA',
        fiat: config.fiat || 'USD',
        address: config.walletAddress,
    });

    return `${baseUrl}?${params.toString()}`;
}

/**
 * Validates a Solana wallet address
 * Basic validation - checks length (Solana addresses are typically 32-44 characters)
 * 
 * @param address - The wallet address to validate
 * @returns true if the address appears valid
 */
export function isValidSolanaAddress(address: string): boolean {
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
