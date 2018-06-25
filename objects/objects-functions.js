//let myBook = {
    //title: '1984',
    //author: 'George Orwell',
    //pageCount: 326
//}



//let otherBook = {
    //title: 'A Peoples History',
    //author: 27 + 1,
    //pageCount: 723
//}

//let getSummary = function (book) {
    //return {
        //summary: `${book.title} by ${book.author}`,
        //pageCountSummary: `${book.title} is ${book.pageCount} pages long`
   // }
    
//}

//let bookSummary = getSummary(myBook)
//let otherBookSummary = getSummary(otherBook)

//console.log(bookSummary.pageCountSummary)

// Challenge area

//let convertFarenheit = function (fahrenheit) {
  //return {
      //fahrenheit: fahrenheit,
      //kelvin: (fahrenheit + 459.67) * (5 / 9),
      //celsius: (fahrenheit - 32) * (5 / 9)
    
  //}
//}

//let temps = convert(fahrenheit)
//console.log(temps)

// Name your favorite restaurant, list the items on the menu,
// console your favorite item on the menu - functions

let myfavRestaurant = {
    Name: 'Goro',
    Item1: 'Tori Paitan',
    Item2: 'Spicy Miso',
    Item3: 'Yasai'   
}

let myfavItem = function (item) {
    return {
        favItem: 'Yasai',
        secFavItem: 'Tori Paitan'
    }
}

let favItem = 'Yasai'
let secfavItem = 'Tori Paitan'
console.log(favItem + ', ' + secfavItem)
