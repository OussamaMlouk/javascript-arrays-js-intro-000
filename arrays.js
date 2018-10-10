var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array,element){
return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray(element,array){
  return array.unshift(element)
}
