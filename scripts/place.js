function calculateWindChill(temperature, windSpeed, isCelsius = false) {
    if (isCelsius) {
        temperature = (temperature * 9 / 5) + 32;
    }

    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

function displayWindChill() {
    const temperature = 25;
    const windSpeed = 5;

    const windSpeedMph = windSpeed / 1.60934;

    const isTemperatureValid = (temperature <= 10);
    const isWindSpeedValid = (windSpeedMph > 3);

    let windChill = "N/A";
    if (isTemperatureValid && isWindSpeedValid) {
        windChill = calculateWindChill(temperature, windSpeedMph, true);
    }

    document.getElementById("windChill").innerHTML = `${windChill} °C`;
}

window.onload = displayWindChill;
