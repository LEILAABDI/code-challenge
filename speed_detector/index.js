function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerExcessKm = 5;
    const pointsThresholdForSuspension = 12;

    // Check if the speed is less than the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    // Calculate demerit points
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / pointsPerExcessKm);

    // Output the demerit points
    console.log(`Points: ${demeritPoints}`);

    // Check if the driver's license should be suspended
    if (demeritPoints > pointsThresholdForSuspension) {
        console.log("License suspended");
    }
}

// Example usage
calculateDemeritPoints(80);
