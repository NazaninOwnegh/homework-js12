//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring

// ------------------------------------------

function idk() {
  if (true) {
    const x = "pink";
    let y = "green";
    var z = "purple";
    console.log(x);
    console.log(y);
  }
  console.log(z);
  console.log(x);
  console.log(y);
}

idk();

// ------------------------------------------

const sayHi = (name) => {
  return `Hiii, ${name}! You're welcome :D`;
};
console.log(sayHi("Nazanin"));

// ------------------------------------------

const firstName = "Nazanin";
let age = 21;
const me = `Hello, my name is ${firstName}, and I am ${age} years old.`;
console.log(me);

// ------------------------------------------

const person = { fullName: "Nazanin", height: 165 };
const { fullName, height } = person;
console.log(fullName, height);

// ------------------------------------------
