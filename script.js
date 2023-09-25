function decimalToBinary(num) {
  //Write you code here
	 if (num === 0) {
    return '0';
  }

  let binary = '';
  while (num > 0) {
    // Append the remainder of num divided by 2 to the binary string
    binary = (num % 2) + binary;
    // Divide num by 2 for the next iteration
    num = Math.floor(num / 2);
  }

  return binary;
  
}

window.decimalToBinary = decimalToBinary;
