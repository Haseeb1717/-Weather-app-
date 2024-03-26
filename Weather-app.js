        const apikey = "4624630c30425b5f25b59ecf8eedb100";
        const searchbtn = document.getElementById('search');
        const weatherdata = document.querySelector('.weatherdata'); 




        searchbtn.addEventListener('click', async () => {
            const inputcity = document.getElementById('inputcity').value;
            if (inputcity) {
                
                await getWeatherData(inputcity); 
            }
        });

        async function getWeatherData(city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`); 
                const data = await response.json();
                displayWeather(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        function displayWeather(data) {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;

            const weatherHtml = `
                <h2>Weather in ${name}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;

            weatherdata.innerHTML = weatherHtml;
        }
