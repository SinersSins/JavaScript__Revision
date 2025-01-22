//! Array Flattening

function flattenArray(arr, depth = Infinity) {
    let result = [];
    if (depth === 0) return arr;         // Handelling edge case when depth will be 0.
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
            result = result.concat(flattenArray(arr[i], depth - 1))     //Recursive call and decreasing depth;
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}


let res1 = flattenArray([1, [2, [3, [4, 5]]]], 2);
console.log(res1)

let res2 = flattenArray([1, [2, [3, [4, 5]]]]);
console.log(res2)



//! Object Flattening ------>

function flattenObject(nestedObject, parentKey = '', result = {}) {
    for (const key in nestedObject) {
        if (nestedObject.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof nestedObject[key] === 'object' && nestedObject[key] !== null) {
                // Recursively flatten nested objects
                flattenObject(nestedObject[key], newKey, result);
            } else {
                // Add the non-object value to the result
                result[newKey] = nestedObject[key];
            }
        }
    }
    return result;
}

const input = {
    user: {
      info: {
        name: "Alice",
        age: 25
      },
      preferences: {
        theme: "dark",
        notifications: true
      }
    },
    status: "active"
  };
  
  let res = flattenObject(input);
  console.log(res)
  /*
  Expected output:
  {
    "user.info.name": "Alice",
    "user.info.age": 25,
    "user.preferences.theme": "dark",
    "user.preferences.notifications": true,
    "status": "active"
  }
  */
  