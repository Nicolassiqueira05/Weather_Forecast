let custom = document.getElementById("custom");
let auto = document.getElementById("auto");
let search = document.getElementById("search");

function block(id) 
{
    switch (id) {
        case "custom":
            break;
        case "auto":
            break;
        default:
            break;
    }
}

function updateResult(data) {
    if (!data || !data.daily) {
        console.error("Dados inválidos:", data);
        return;
    }

    const daily = data.daily;
    const todayIndex = 0;

    const rain = daily.precipitation_sum[todayIndex];
    const humidity = data.hourly.relative_humidity_2m.slice(0, 24); // só o primeiro dia
    const wind = daily.windspeed_10m_max[todayIndex];
    const tempMax = daily.temperature_2m_max[todayIndex];
    const tempMin = daily.temperature_2m_min[todayIndex];

    const avgHumidity = humidity.reduce((a, b) => a + b, 0) / humidity.length;

    const resultDiv = document.getElementById("result");
    const paragraphs = resultDiv.querySelectorAll("p");

    paragraphs[0].textContent = `Rain: ${rain} mm`;
    paragraphs[1].textContent = `Humidity: ${avgHumidity.toFixed(1)} %`;
    paragraphs[2].textContent = `Wind: ${wind} km/h`;
    paragraphs[3].textContent = `Max: ${tempMax} °C`;
    paragraphs[4].textContent = `Min: ${tempMin} °C`;
}

custom.addEventListener('change', (e) => {
    e.target.checked ? (auto.checked = false) : null;
});
auto.addEventListener('change', (e) => {
    e.target.checked ? (custom.checked = false) : null;
});

search.addEventListener('click', async (e) => {
    let props;

    if (custom.checked)
    {
        props = {
            latitude: document.getElementById("custom_latitude").value,
            longitude: document.getElementById("custom_longitude").value,
            timezone: "auto"
        }
    } 
    else if (auto.checked) 
    {
        props = {
            latitude: document.getElementById("auto_latitude").value,
            longitude: document.getElementById("auto_longitude").value,
            timezone: "auto"
        }
    } else {
        window.alert("You must choose a location method");
        return;
    }

    try {
        let data = await FetchForecast(props);
        updateResult(data)
    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
});
