
// Error Handling with Try-Catch

try {
  alert('Start of try runs') // (1) <--

  lalala // error, variable is not defined!

  alert('End of try (never reached)') // (2)
} catch (err) {
  alert(`Error has occurred!`) // (3) <--
  console.log("Error Object ==>",err)
}

// try...catch only works for runtime errors
try {
  cont fn =()
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}


// try...catch works synchronously

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}

// to catch an exception inside any async code like setTimeout move try-catch inside:
setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);


// Example:
let data = "{ id 10 }";

try {
  // lalalala;
  let user = JSON.parse(data); // <-- when an error occurs...
  alert(user.id); // doesn't work

} catch (err) {
  // ...the execution jumps here
  if (err.name === "ReferenceError") {
			alert("Can't even declare a variable lalalala !!!")
  } else {
    console.log("Error while parsing JSON:");
    console.log(err.name);
    console.log(err.message);
  }
}



// "Throw" operator => to create errors manually when something goes unexpected


let json = '{ "age": 30 }'; // incomplete data
let myError = new SyntaxError("Incomplete data: no name");
try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw myError; // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}



let genericError = new Error("This is a generic error")
let syntaxError = new SyntaxError("This is a syntax error")
let referenceError = new ReferenceError("This is a reference error")


try{
  let bankBalance = 100
  if(bankBalance <500){
    // throw genericError;
    throw new Error("Balance can't be less than 500");
  }else{
    alert('====> balance looks good')
  }
}catch(err){
  console.log('===> ',err.name, err.message)
}

// Most common example: parsing JSON string
let obj = '{ "id" 10 }';
// let obj = '{ "id": 10 }';
// let obj = '{ "number" : 10 }';

try {

  let user = JSON.parse(obj); 
  alert( "USER ID IS",user.id ); 
  if(!user.id){
    throw new Error("Id doesn't exist !!")
  }
  alert( "USER ID IS",user.id ); 

} catch (err) {
  // ...the execution jumps here
  console.log( "Error while parsing JSON:" );
  console.log( err.name );
  console.log( err.message );
}


// try catch finally
console.log("start")
try {
  console.log( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  console.log( 'catch' );
} finally {
  console.log( 'finally' );
}
console.log("end")
