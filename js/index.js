/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const intInput = document.getElementById("int-input")
const convertBtn = document.getElementById("convert-btn")
const meterFeetEl = document.getElementById("meter-feet")
const litersGallonsEl = document.getElementById("liters-gallons")
const kilosPoundsEl = document.getElementById("kilos-pounds")



init()

convertBtn.addEventListener("click", function(int) {
    init()
})



function init() {
    let intValue = getValue(intInput.value)

    meterFeetString(intValue)
    litersGallonsString(intValue)
    kilosPoundsString(intValue)
}



// String Functions
function meterFeetString(value) {
    return meterFeetEl.textContent = 
            `${value} meters = ${meterToFeet(value)} feet |
             ${value} feet = ${feetToMeter(value)} meters`
}

function litersGallonsString(value) {
    return litersGallonsEl.textContent = 
            `${value} liters = ${litersToGallons(value)} gallons |
             ${value} gallons = ${gallonsToLiters(value)} liters`
}

function kilosPoundsString(value) {
    return kilosPoundsEl.textContent = 
            `${value} kilos = ${kilogramsToPounds(value)} pounds |
             ${value} pounds = ${poundsToKilograms(value)} kilos`
}



// Get Functions
function getValue(input) {
    if (!input) {
        return 0
    } else {
        return input
    }
}



// Length
function meterToFeet(meter) {
    let feet = (meter * 3.28084)
    return feet.toFixed(3)
}
function feetToMeter(feet) {
    let meter = (feet / 3.28084)
    return meter.toFixed(3)
}
// Volume
function litersToGallons(liters) {
    let gallons = (liters * 0.26417217685)
    return gallons.toFixed(3)
}
function gallonsToLiters(gallons) {
    let liters = (gallons / 0.26417217685)
    return liters.toFixed(3)
}
//Mass
function  kilogramsToPounds(kilograms) {
    let pounds = (kilograms * 2.20462)
    return pounds.toFixed(3)
}
function  poundsToKilograms(pounds) {
    let kilograms = (pounds / 2.20462)
    return kilograms.toFixed(3)
}
