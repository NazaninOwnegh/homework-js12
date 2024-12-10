//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:

function action() {
  console.log("Action");

  function potential() {
    console.log("Potential");

    function signals() {
      console.log("Signals");
    }

    signals();
  }

  potential();
}

action();
