let browserName = "Chrome"
let runTest = "Regression Test"
    if(browserName == "Edge")
    {
        console.log("The Browser Name is Edge.")
    }
    else if(browserName == "Firefox")
    {
        console.log("The Browser Name is Firefox.")
    }
    else if(browserName == "Safari")
    {
        console.log("The Browser Name is Safari.")
    }
    else
    {
        console.log("The Browser Name is CHROME and the browser is launched successfully.")
    }
switch(runTest)
{
    case "Smoke Test":
        console.log("The Selected Test is SMOKE Test.")
        break;

    case "Sanity Test":
        console.log("The Selected Test is SANITY Test.")
        break;
    
    case "Functional Test":
        console.log("The Selected Test is FUNCTIONAL Test.")
        break;

    case "E2E Test":
        console.log("The Selected Test is End To End Test.")
        break;
    
    default:
        console.log("The Selected Test is REGRESSION Test.")
}