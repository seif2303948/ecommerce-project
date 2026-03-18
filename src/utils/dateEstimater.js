export function dateEstimater(estimatedDeliveryTimeMs){
    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let monthName = monthNames[(new Date(estimatedDeliveryTimeMs).getMonth())];
    let dayOfTheMonth = new Date(estimatedDeliveryTimeMs).getDate();
    return `${monthName} ${dayOfTheMonth}`
}