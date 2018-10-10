var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array,element){
return [element, ...array]
}

var array = [1]

function destructivelyAddElementToBeginningOfArray(array,foo){
  array.unshift(foo)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}
