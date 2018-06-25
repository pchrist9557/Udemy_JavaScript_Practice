// simple else if statements - will print out either one of those messages if true / false

let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log ('Is account locked')
} else {
    console.log('Welcome to the account!')
} 

// advanced else if statement - will print out three different options 

if (isAccountLocked) {
    console.log ('Is account locked')
} else if (userRole === 'admin') {
   console.log('Welcome admin')
} else { 
    console.log('Welcome')

}


// challenge area

let temp = 450

// It is freezing outside
// it is hot outside
// It is pretty outside. 

if (temp <= 32) {
    console.log('It is freezing outside')
} else if (temp >= 110) {
    console.log('It is hot outside')
} else {
     console.log ('It is pretty outside!')
}

