function getLocation(callback)
{
    return new Promise((resolve, reject) =>{
        if ('geolocation' in navigator) 
        {
        navigator.geolocation.getCurrentPosition(
        (position) => 
        {
        props = {latitude: position.coords.latitude, longitude: position.coords.longitude, timezone: "auto"} 
        resolve(props)
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
    )
}

async function FetchLocation(props) {
    try {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${props.latitude}&longitude=${props.longitude}`);
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
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
console.log(FetchLocation({latitude:"-23.55", longitude:"-46.63"}))