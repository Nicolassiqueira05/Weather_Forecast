let search = document.getElementById("search");
let getcbutton = document.getElementById("getc")
let latitudeinput = document.getElementById("latitude")
let longitudeinput = document.getElementById("longitude")

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

getcbutton.addEventListener('click', async (e) =>{
    try
    {
        let data = await getLocation()
        latitudeinput.value = data.latitude
        longitudeinput.value = data.longitude
        let location = await FetchLocation({latitude: data.latitude, longitude: data.longitude})
        window.alert(`Location got: ${location.countryName}, ${location.principalSubdivision}, ${location.city}`)
    }
    catch (error)
    {
        console.log(error)
    }
    
})

search.addEventListener('click', async (e) => {
    let props;
    console.log(latitudeinput.value)
    if (latitudeinput.value != "" && longitudeinput != "null")
    {
        props = 
        {
            latitude: document.getElementById("latitude").value,
            longitude: document.getElementById("longitude").value,
            timezone: "auto"
        }
    } 
    else
    {
        window.alert("Fulfill the coordinates first")
    }

    try {
        let data = await FetchForecast(props);
        updateResult(data)
    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
});
