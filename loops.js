function forLoop(array) {
  let n = 25;
  let m = array.length;
  for(var i=0; i < n; i++){    
    array[m + i] = (`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

//Create a function called whileLoop
//The function should take a number as an argument.
function whileLoop(n){
//Using a while loop
  while(n !== 0){
//Count down (using console.log) 
//From the passed in number to 0.
    console.log(n);
    n--;
  }
  //Then return the string 'done'
  return "done";
}

//Define a function called doWhileLoop
//The function should take an array as an argument. 
function doWhileLoop(array){
  //Use the maybeTrue() function (you can copy it from this README) as the condition, 
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  //remove elements from the array until the array is empty or until maybeTrue() returns false. 
  do {
    array.pop();
  } while (array.length > 0 || maybeTrue());
  //Finally, return the array.
  return array;
}




 

