// Original array with two objects
const originalArray = [
    { key1: 'value1', key2: 'value2' },
    { key3: 'value3', key4: 'value4' }
  ];
  
  // Function to transform keys
  function transformKeys(array) {
    // Map over each object in the array
    return array.map(obj => {
        console.log(obj)
      // Create a new object to store transformed keys
      const newObj = {};
      // Loop through each key-value pair in the object
      Object.keys(obj).forEach(key => {
        // Transform the key and assign the value to the new object
        newObj['new_' + key] = obj[key];
      });
      return newObj; // Return the object with transformed keys
    });
  }
  
  // Apply the transformation
  const transformedArray = transformKeys(originalArray);
  
  console.log(transformedArray);
  