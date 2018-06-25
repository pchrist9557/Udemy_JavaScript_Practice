// undefined for variable

let name 

name = 'Christine'

if (name === undefined) {
   console.log('Please provide a name.')
} else {
  console.log (name)
}


// Undefinded for function arguments
// Undefined as the function default value 
let square = function (num) {
    console.log(num)
} 

let result = square()

console.log(result)

// Null as a signed value

let age = 27

age = null

console.log(age)

