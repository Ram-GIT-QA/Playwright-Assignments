let avgMark = 62
switch(true)
{
    case(avgMark>=40 && avgMark<=59.9):
        console.log("The Student has passed with GRADE C")
        break
    case(avgMark>=60 && avgMark<=74.9):
        console.log("The Student has passed with GRADE B")
        break
    case(avgMark>=75 && avgMark<=89.9):
        console.log("The Student has passed with GRADE A")
        break
    case(avgMark>=90 && avgMark<=100):
        console.log("The Student has passed with GRADE A+")
        break
    default:    
        console.log("The Student has FAILED")

}