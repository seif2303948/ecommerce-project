export function dateEstimater(estimatedDeliveryTimeMs){
    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let monthName = monthNames[(new Date(estimatedDeliveryTimeMs).getMonth())];
    let dayOfTheMonth = new Date(estimatedDeliveryTimeMs).getDate();
    return `${monthName} ${dayOfTheMonth}`
}
export function calculateFutureDayMilliseconds( daysToAdd) {
    let today = new Date();
    // Milliseconds in one day
    const oneDayMilliseconds = 24 * 60 * 60 * 1000;
    // Calculate the future timestamp
    const futureTime = today.getTime() + (daysToAdd * oneDayMilliseconds);
    
    // Create a new Date object from the future timestamp
    const futureDate = new Date(futureTime);
    
    // Get the day of the week as a string
    const options = { weekday: 'long' };
    const dayOfWeek = futureDate.toLocaleDateString('en-US', options);
    
    return { date: futureDate, dayOfWeek: dayOfWeek };
}