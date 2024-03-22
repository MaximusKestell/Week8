// ways of declaring variables n constants in javascript.

// let creates a variable - can be changed

let school = 'Minneapolis College'
console.log(school)
school = 'Saint Paul College'
console.log(school)
school = 'Metro State'
console.log(school)
school = 'Minneapolis College'
console.log(school)

// wht abt creating constants?

const language = 'JavaScript'
console.log(language)
// language = 'C#' // did not work bc "language" is a constant

// why would u make a constant?
// If you have data in your program that you know what it is and you wont change it,
// it is safer to make a constant because u cant accidentally change it.

const states = ['Minnesota', 'Wisconsin', 'Iowa']
// states = ['California', 'Oregon'] //error because u cant reset the value, only modify it.
states.push('Michigan')
console.log(states)

// things 2 watch out for with constant arrays and obj

const address = {
    number: '1501',
    street: 'Hennepin Avenue',
    city: 'Minneapolis'
}

// address = 1234 // error
// address = {}
// address = { number: 100, street: 'Main St.', city: 'St. Paul'}

address.zip = '55403' // is valid bc you can modify the object, eg new properties
console.log(address)

address.street = 'Hennepin Ave'

// how to choose let vs const
// if not sure, can always use let. If you know not changing data, use const. If know need to change, use let.

