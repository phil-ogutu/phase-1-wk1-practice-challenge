function studentGradeGenerator (){
    const mark = parseInt(prompt("Enter student marks (0-100):"));

    if (mark<0 || mark>100) {
        console.log("Invalid input.");
        return;
    }
    
    let grade
    if(mark>79){
        grade = "A"
    }
    if(mark>=60 && grade<=79){
        grade = "B"
    }
    if(mark>=40 && grade<59){
        grade = "C"
    }
    if(mark>=40 && grade <=49){
        grade = "D"
    }
    if(mark<40){
        grade = "E"
    }

    console.log `The student grade is ${grade}`
}

studentGradeGenerator();

