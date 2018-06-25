// to create mutiple functions, use a comma separated list 

//let add = function (a, b, c) {
    //return a + b + c
//}

//let result = add(10, 1, 5) 
    //console.log(result)


// Default arguments

//let getScoreText = function(name = 'ChristinePhung', score = 0) {
    //return `Name: ${name} - Score: ${score}`
   //return 'Name:' + name + ' - Score ' + score 
//}

//let scoreText = getScoreText(undefined, 99)
//console.log(scoreText)



// Challenge area
// A 25 % tip on $40 ? would be $10 (answer)



let getTip = function (total = 40, tipPercent = 0.2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(40, .25)
console.log(tip)