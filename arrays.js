// My arrays.js
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
 
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
}
/*
function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}
/*
function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.unshift()
}

function removeElementFromBeginningOfArray(array) {
  return array.unshift()
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array //  returns the array with the last element removed:
}

function removeElementFromEndOfArray(array) {
  return array
}

console.log("Starting my JAVASCRIPT ARRAYS Lab.") // DOES NOT DISPLAY

addElementToBeginningOfArray(chocolateBars, 'Dark Chocolate')
console.log(chocolateBars)

destructivelyAddElementToBeginningOfArray(chocolateBars, "Dark Chocolate")
console.log(chocolateBars)

addElementToEndOfArray(chocolateBars, "Dark Chocolate")

destructivelyAddElementToEndOfArray(chocolateBars, "Dark Chocolate")

accessElementInArray(chocolateBars, 0)

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

removeElementFromBeginningOfArrayy(chocolateBars)

destructivelyRemoveElementFromEndOfArray(chocolateBars)

removeElementFromEndOfArray(chocolateBars)

console.log('Finished my JAVASCRIPT ARRAYS Lab.') // DOES NOT DISPLAY
 */
// End my arrays.js