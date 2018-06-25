//let temp = 150

// logical AND operator - True if both sides are true. False otherwise. 

//if (temp >= 60 && temp <= 90) {
   //console.log('It is pretty nice out!')
//}

// logical OR operator - True if at least one side is true. False otherwise. 
//if (temp <= 60 || temp >= 120) {
    //console.log('Do not go outside!')
//} else {
    //console.log('Eh. Do what you want.')
//}

// challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes
// At least one guest is vegan? Make sure to ofer up some vegan options
// Else, Offer up anything on the menu

if (isGuestOneVegan === true && isGuestTwoVegan === false ) {
    //console.log('Offer up only vegan dishes')
} else if (isGuestOneVegan === true || isGuestTwoVegan === false) {
    console.log('Make sure to offer up some vegan dishes')
  } else {
   console.log('Offer non-vegan dishes')
}

//Answer

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan dishes')
} else {
    console.log('Offer up anything on the menu')
}