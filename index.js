fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    //callback has element, index, collection

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection);
        }
      }
      else {
        for (const key in collection){
          callback(collection[key], key, collection);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      const newArr = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++){
          newArr.push(callback(collection[i], i, collection));
        }
      }
      else {
        for (const key in collection){
          newArr.push(callback(collection[key], key, collection));
        }
      }
      return newArr;
    },

    reduce: function(collection, callback, initial) {
      let total = 0; //Might want var? if array has [1,2,'i'] breaks if let
      if (!!initial){total = initial}
      for (let i = 0; i < collection.length; i++) {
        total = callback(total, collection[i], collection);
      }
      return total;
    },

    find: function(collection, predicate) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++){
          if (predicate(collection[i])){
            return collection[i];
          }
        }
      }
      else {
        for (const key in collection){
          if (predicate(collection[key])){
            return collection[key];
          }
        }
      }
    },

    filter: function(collection, predicate) {
      const newArr = [];
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){newArr.push(collection[i]);}
      }
      return newArr;
    },

    size: function(collection) {
      if (Array.isArray(collection)){
        return collection.length;
      }
      else {
        return Object.keys(collection).length;
      }
    },

    first: function(array, n) {
      if (n){
        return array.slice(0,n);
      }
      else{
        return array[0];
      }
    },

    last: function(array, n) {
      if (n){
        return array.slice(-n);
      }
      else{
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      const newArr = [];
      for(let i=0; i<array.length; i++){
        if (!!array[i]){
          newArr.push(array[i]);
        }
      }
      return newArr;
    },

    sortBy: function(array, callback) {
      const newArr = [];
      const destArr = array.slice();
      while (destArr.length > 0){
        let tmp = destArr[0];
        let tmpID = 0;
        for(let i=1; i<destArr.length; i++){
          if (callback(destArr[i]) < callback(tmp)){
            tmp = destArr[i];
            tmpID = i;
          }
        }
        destArr.splice(tmpID, 1);
        newArr.push(tmp);
      }
      return newArr;
    },

    flatten: function(array, shallow) {
      const newArr = [];
      if (shallow){
        for(let i=0; i<array.length; i++){
          if (!!array[i].length){
            for(let j=0; j<array[i].length; j++){
              newArr.push(array[i][j]);
            }
          }
          else{
            newArr.push(array[i]);
          }
        }
      }
      else if (!shallow){
        for(let i=0; i<array.length; i++){
          if (!!array[i].length){
            newArr.push(...fi.flatten(array[i], false))
          }
          else{
            newArr.push(array[i]);
          }
        }
      }
      return newArr;
    },

    uniq: function(array, sorted, callback) {
      const newArr = [];
      if (sorted){
        for (let i=0; i<array.length; i++){
          if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
          }
        }
      }
      else if (!!callback){
        for(let i=0; i<array.length; i++){
          let addThis = true;
          let cbVal = callback(array[i]);
          if (!!newArr.length){
            for(let j=0; j<newArr.length; j++){
              if (callback(newArr[j]) === cbVal){addThis = false;}
            }
          }
          if (addThis){
            newArr.push(array[i]);
          }
        }
      }
      else {
        for (let i=0; i<array.length; i++){
          if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
          }
        }
      }
      return newArr;
    },

    keys: function(object) {
      const keysArr = [];
      for (const key in object){
        keysArr.push(`${key}`);
      }
      return keysArr;
    },

    values: function(object) {
      const valArr = [];
      for (const key in object){
        valArr.push(object[key]);
      }
      return valArr;
    },

    functions: function(object) {
      // return = Object.keys(this); // Get All Functions in this
      const fnArr = [];
      for (const key in object){
        if(typeof(object[key]) === "function"){
          fnArr.push(`${key}`);
        }
      }
      return fnArr;
    },


  }
})()

fi.libraryMethod()
