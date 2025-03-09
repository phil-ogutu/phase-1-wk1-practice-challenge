function speedDetector(){
    const speedLimit = 70
    let demeritPoints = 0

    let speed = parseInt(prompt("Enter speed:"));
    if(speed<=70){
        console.log("Ok")
    }else if(speed>70){
        demeritPoints = (speed- speedLimit)/5

        if(demeritPoints>12){
            console.log(`Licence Suspended. Points:${demeritPoints} are greater than 12`)
        }else{
            console.log(`Points: ${demeritPoints}`)
        }
    }
}

speedDetector()