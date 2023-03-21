function distanceFromHqInBlocks(someValue) {
    const hq = 42; 
    if (someValue < 0) {
      return "Invalid block number"; 
    }
    return Math.abs(hq - someValue); 
  }

function distanceFromHqInFeet(someValue) {
    const blockLength = 264; // value provided in indexText.js
    const blocks = distanceFromHqInBlocks(someValue);

    return blocks * blockLength; 
}

function distanceTravelledInFeet(start, destination) {
    const blockLength = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * blockLength;

    return distanceInFeet
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let farePrice = 0;
    if (distanceInFeet <= 400) {
        farePrice = 0;
    } else if (distanceInFeet <= 2000) {
        farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
        farePrice = 25;
    } else {
        farePrice = "cannot travel that far";
    }
    return farePrice;
}