var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array,element){
return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray(array,foo){
  return array.unshift("foo")
}
