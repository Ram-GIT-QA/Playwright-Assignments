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

getBrowser = "Chrome v 140.0.7499.41"
console.log("\n"+getBrowser+"(Updated browser version by changing the variable name & its value)")

getBrowser = 141.1
console.log("\n"+getBrowser+"(Updated browser version by changed the datatype to number)")

let getBrowserVersion1 = "v141.0.7499.41"
console.log("\n"+getBrowserVersion1+"(Using the let datatype, unable to redeclare the var datatype variable name)")

getBrowserVersion1 = 142.7
console.log("\n"+getBrowserVersion1+"(changed the dataype to number)")

const browserName1 = "Edge"
console.log("\n"+browserName1+"(The const datatype => Unable to redeclare and unable to change the value)")