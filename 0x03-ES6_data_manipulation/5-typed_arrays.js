export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view of the buffer
  const int8Array = new Int8Array(buffer);

  // Check if the specified position is within range
  if (position >= 0 && position < length) {
    // Set the value at the specified position
    int8Array[position] = value;
  } else {
    // Throw an error if the position is outside the range
    throw new Error("Position outside range");
  }

  // Return the ArrayBuffer
  return buffer;
}
