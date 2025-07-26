function getLocation()
{
    if ('geolocation' in navigator) 
    {
    navigator.geolocation.getCurrentPosition(
    (position) => 
    {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude; 
    return ({latitude: latitude, longitude: longitude})
    },
    (error) => 
    {
    console.error('Erro ao obter localização:', error.message);
    }
    )
    } 
    else 
    {
    console.error('Geolocalização não suportada pelo navegador.');
    }   
}


async function FetchForecast (props) 
{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${props.latitude}&longitude=${props.longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&hourly=relative_humidity_2m&timezone=${props.timezone}`

    try
    {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        console.log('Dados do tempo:', data);
        return data;
    }
    catch
    {
        console.error('Erro ao buscar dados do tempo:', error);
        return null;
    }
}
console.log(FetchForecast({latitude:"-23.55", longitude:"-46.63", timezone: "auto"}))