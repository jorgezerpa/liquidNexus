export function formatBalanceValue(balance: string, decimals: number): string {
  if (typeof balance !== 'string') {
    throw new Error('Balance must be a string.');
  }

  if (typeof decimals !== 'number' || decimals < 0) {
    throw new Error('Decimals must be a non-negative number.');
  }

  // Handle cases where balance is '0' or empty
    if (balance === '0' || balance === '') {
        return '0';
    }


  const integerPartLength = balance.length - decimals;

  if (integerPartLength <= 0) {
    let fractionalPart = balance.padStart(decimals + 1, '0');
    fractionalPart = fractionalPart.slice(-decimals);

    // Limit to 5 decimal places
    fractionalPart = fractionalPart.slice(0, Math.min(5, fractionalPart.length)); // Take max 5 or less
    const formattedBalance = `0.${fractionalPart}`;

    const trimmedBalance = formattedBalance.replace(/0*$/, '');

    if (trimmedBalance === '0.') {
      return '0';
    } else if (trimmedBalance === '0') { // Check if it becomes 0
        return '0'
    } else {
        return trimmedBalance;
    }
  }

  const integerPart = balance.slice(0, integerPartLength);
  let fractionalPart = balance.slice(integerPartLength);

  if (fractionalPart.length > 0) {
      fractionalPart = fractionalPart.slice(0, 4); // Keep only up to 4 decimal places
      const formattedBalance = `<span class="math-inline">\{integerPart\}\.</span>{fractionalPart}`;
      const trimmedBalance = formattedBalance.replace(/\.0*$/, ''); // Remove trailing zeros and . if no decimals
      return trimmedBalance === integerPart ? integerPart : trimmedBalance; // Return integer part if only 0. remains
  } else {
      return integerPart;
  }
}