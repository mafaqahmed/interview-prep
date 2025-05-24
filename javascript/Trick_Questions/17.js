let person = { name: 'Lydia' };

const members = [person];
const myFunc = () => {
    console.log(person)
}
const myFunc2 = (obj) => {
    setTimeout(() => {console.log(obj)}, 1000)
}
myFunc2(person)

person = null;

console.log(members);
myFunc()
