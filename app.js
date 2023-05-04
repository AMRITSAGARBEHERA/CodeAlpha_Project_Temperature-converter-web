let celciusInput = document.querySelector('#celcius > input');
let FarenheitInput = document.querySelector('#Farenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');
let button = document.querySelector('.button button');
function roundNum(num) {
    return Math.round(num * 100) / 100
}
celciusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = (cTemp * (9 / 5)) + 32;
    let kTemp = cTemp + 273.15;
    FarenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
})
FarenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(FarenheitInput.value);
    let cTemp = (fTemp - 32 ) * (5/9);
    let kTemp =(fTemp - 32 ) * (5/9) + 273.15;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
})
kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp =(kTemp - 273.15) * (9/5) + 32;
    FarenheitInput.value = roundNum(fTemp);
    celciusInput.value = roundNum(cTemp);
})
button.addEventListener('click', function () {

celciusInput.value = ""
FarenheitInput.value = ""
kelvinInput.value = ""
})