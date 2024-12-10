// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function outerFunc(A, B) {
  function innerFunc(a, b) {
    return a * b;
  }
  return innerFunc(A, B);
}

console.log(outerFunc(2, 5));
