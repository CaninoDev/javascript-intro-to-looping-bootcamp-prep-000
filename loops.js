function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 stronge loop.")
    } else { 
      array.push(`I am ${i} strange loop`) 
    }
  }
  return array
}

function whileLoop(int) {
  while (int !== 0) {
    console.log(--int)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.pop();
<<<<<<< HEAD
  } while (maybeTrue() && array.length === 0)
=======
  } while (maybeTrue() && array.length > 0)
>>>>>>> e56c67eddd31677b787aef9f53c4dae8f699d0e1
  return array
}

