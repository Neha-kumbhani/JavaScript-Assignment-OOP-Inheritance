function square(arr){
  var copyArr = arr.slice();
  var returnArr = [];
  
  copyArr.forEach(function(elem){
    returnArr.push(Math.pow(elem, 2));
  });
  
  return returnArr;
}

function cube(arr){
  var copyArr = arr.slice();
  var returnArr = [];
  
  copyArr.forEach(function(elem){
    returnArr.push(Math.pow(elem, 3));
  });
  
  return returnArr;
}

function average(arr){
  var copyArr = arr.slice();
  return copyArr.reduce(function (p, c) { return p + c; }) / copyArr.length;
}

function sum(arr){
  var copyArr = arr.slice();
  return copyArr.reduce(function (p, c) { return p + c; });
}

function even(arr){
  var copyArr = arr.slice();
  var returnArr = [];
  
  copyArr.forEach(function(elem){
    if(elem % 2 == 0)
      returnArr.push(elem);
  });
  
  return returnArr;
}

function odd(arr){
  var copyArr = arr.slice();
  var returnArr = [];
  
  copyArr.forEach(function(elem){
    if(elem % 2 != 0)
      returnArr.push(elem);
  });
  
  return returnArr;
}

var numbers = [1, 2, 3, 4, 5];
square(numbers); // must return [1, 4, 9, 16, 25]
cube(numbers); // must return [1, 8, 27, 64, 125]
average(numbers); // must return 3
sum(numbers); // must return 15
even(numbers); // must return [2, 4]
odd(numbers); // must return [1, 3, 5]