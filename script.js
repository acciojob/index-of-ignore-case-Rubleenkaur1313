function indexOfIgnoreCase(str: string, subStr: string): number {
// Handle edge cases
    if (subStr.length === 0) {
        return 0; // If subStr is empty, return 0 (as per common convention)
    }
    
    // Convert both strings to lower case
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    
    // Find the index of the first occurrence of lowerSubStr in lowerStr
    const index = lowerStr.indexOf(lowerSubStr);
    
    return index; // Return the index or -1 if not found
}