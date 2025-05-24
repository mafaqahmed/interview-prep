// ------------------ what is this keyword --------------------------------
// console.log(this) // {} - this represents module.exports here 

function showThis() {
    console.log(this) // represents global object (node) or window (borwser) or a new object (if function is called with new keyword)
    this.name = "afaq" // global object is modified (use strict makes global object immutable and then this global object will not be accessed by this keyword)
}
showThis()
console.log(global.name) // prints afaq

// class this_keyword {
//     constructor() {
//         console.log(this) // {} -  represents this class object
//         this.name = "afaq" // added name peroperty in class (this is also updated as it represents this class object)
//         console.log(this) // { name: 'afaq' } -  represents this class object
//     }
// }
// const myThis = new this_keyword
