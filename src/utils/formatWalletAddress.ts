export function formatWalletAddress(address: string): string {
    // Assertion: Check if the address has at least 8 characters
    if (address.length < 8) {
      return address;
    }
  
    const first4Letters = address.substring(0, 4);
    const last4Letters = address.substring(address.length - 4);
  
    return `${first4Letters}...${last4Letters}`;
  }