// Helper function to determine the type of the collection
function isObject(collection) {
    return Object.prototype.toString.call(collection) === '[object Object]';
  }
  
  // myEach
  function myEach(collection, callback) {
    if (isObject(collection)) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key);
        }
      }
    } else if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i);
      }
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const result = isObject(collection) ? {} : [];
    myEach(collection, (value, key) => {
      result[key] = callback(value, key);
    });
    return result;
  }
  
  // myReduce
  function myReduce(collection, callback, acc) {
    let initialAcc = acc;
    let startIndex = 0;
  
    if (acc === undefined) {
      initialAcc = collection[0];
      startIndex = 1;
    }
  
    myEach(collection, (value, key) => {
      initialAcc = callback(initialAcc, value, key, collection);
    });
  
    return initialAcc;
  }
  
  // myFind
  function myFind(collection, predicate) {
    let result;
    myEach(collection, (value, key) => {
      if (predicate(value, key)) {
        result = value;
        return false; // exit early
      }
    });
    return result;
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const result = isObject(collection) ? {} : [];
    myEach(collection, (value, key) => {
      if (predicate(value, key)) {
        if (Array.isArray(result)) {
          result.push(value);
        } else {
          result[key] = value;
        }
      }
    });
    return result;
  }
  
  // mySize
  function mySize(collection) {
    if (isObject(collection)) {
      return Object.keys(collection).length;
    } else if (Array.isArray(collection)) {
      return collection.length;
    }
  }
  
  // myFirst
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  // myLast
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }
  
  