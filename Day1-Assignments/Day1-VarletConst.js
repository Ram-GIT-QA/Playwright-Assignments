const browserName = "Chrome"
var getBrowserVersion = "v139.0.7499.41"
    if(browserName === "Chrome")
    {
        console.log("The Browser Name is: "+browserName+". Its version: "+getBrowserVersion)
    }
    else
    {
        console.log("The Chrome browser is not launched.")
    }

var getBrowserVersion = "Chrome v 140.0.7499.41"
console.log("\n"+getBrowserVersion+"(Updated browser version by redeclaring the same variable name & its value)")

var getBrowserVersion = 141.1
console.log("\n"+getBrowserVersion+"(Updated browser version by redeclaring the datatype to number, but same variable name)")

let getBrowserVersion1 = "v141.0.7499.41"
console.log("\n"+getBrowserVersion1+"Assigning new value.")

getBrowserVersion1 = 142.7
console.log("\n"+getBrowserVersion1+"(Using the let datatype, unable to redeclare the same variabled name.\n But reassign the value also to any datatype)")

const browserName1 = "Edge"
console.log("\n"+browserName1+"(The const datatype => Unable to redeclare and unable to change the value)\nUnable to redeclare and reassign the const datatype variable name and value respectively.")


console.log("\n********** Summary of Var, Let and Const datatypes **********\n")
console.log("The var datatype.\n Allows redeclaration and reassignment of variable names and values respectively.")
console.log("Example:\n var a =10. var a =20. a = 'Test'")
console.log("The let datatype.\n Does not allow redeclaration of variable names, but allows reassignment of values and any datatypes.")
console.log("Example: \n let x = 'Hi'. x = 123. let x = 1 (Not Allowed)")
console.log("The const datatype.\n Does not allow redeclaration of variable names and does not allow reassignment of values.")
console.log("Example:\n const y = 50. y = 'Hello' (Not Allowed). const y = 70 (Not Allowed).")