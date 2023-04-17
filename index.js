//k3n5c0d3
// Code your solution in this file!

const scuderHqLocal = 42;
//to return distanceFromHqInBlocks
function distanceFromHqInBlocks(distance) {
    if (distance > scuderHqLocal) {
        return distance - scuderHqLocal;
    } else if (distance < scuderHqLocal) {
        return scuderHqLocal - distance;
    } else {
        return 0;
    }
}
//to return distanceTravelledInFeet()
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}
//To return distanceFromHqInBlocks()
function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
      return (destination - start) * 264;
    } else if (start > destination) {
      return (start - destination) * 264;
    }
}
// To calculatesFarePrice(start, destination)
function calculatesFarePrice(start, destination){
   // const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceTravelledInFeet(start, destination) <= 400) {
     return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
     return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
     return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500){
     return  "cannot travel that far";
    }
}