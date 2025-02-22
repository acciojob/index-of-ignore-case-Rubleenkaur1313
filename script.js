// Handle edge cases
    if (subStr.length === 0) {
        return 0; // If subStr is empty, return 0 (found at the start)
    }
    if (str.length === 0) {
        return -1; // If str is empty and subStr is not, return -1
    }

    // Convert both strings to lower case for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the first occurrence of lowerSubStr in lowerStr
    return lowerStr.indexOf(lowerSubStr);
}
