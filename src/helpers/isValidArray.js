/**
 * Verifies if the introduced array is of type array and has at least one element
 */
const isValidArray = arr => arr && Array.isArray(arr) && arr.length > 0;

export default isValidArray;

