//api key = 0e88487e30ee46813c3df2590151a50c
const apikey = "0e88487e30ee46813c3df2590151a50c"
const images = {"Haze": "/images/icons8-haze-64.png","Clouds":"/images/icons8-clouds-64.png","Rain":"/images/icons8-rain-64.png",
"Snow":"/images/icons8-snow-64.png", "Clear":"/images/icons8-sun-64.png","Drizzle":"/images/icons8-sun-64.png",
"Thunderstorm":"/images/icons8-storm-64.png","Mist":"/images/icons8-mist-64.png","Fog":"/images/icons8-fog-64.png"};
const submitButton = document.querySelector(".submit")
const datas = []
submitButton.addEventListener("click",() => {
  const inputVal = document.querySelector(".waah").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apikey}&units=metric`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
            throw new Error("City not found"); // Throw an error if response is not ok
        }
        return response.json();
    })
      .then(data => {
          // Handle the fetched data here
          
          document.querySelector(".waah").value = ""; // Clear error message
          document.querySelector(".errorMessage").innerHTML = ""; // Clear the input field
          
          const cityName = data.name;
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description;
          const iconW = data.weather[0].main;
          if (datas.includes(cityName)) {
            document.querySelector(".errorMessage").innerHTML = "You already have the data for this";

          } else {
            // document.querySelector(".icon-container").style.backgroundColor = "white";
            datas.push(cityName);
            document.querySelector(".icons").innerHTML += `
            <li>
            <h2>City: ${cityName}</h1>
            <h2>Temperature: ${temperature}°C</h1>
            <h2>Weather: ${weatherDescription}</h3>
            <img src=${images[iconW]}>
            </li>
    
            `
          }
          
      })
      .catch(error => {
          console.error("Error fetching data:", error);
          document.querySelector(".errorMessage").innerHTML = "Please type a valid city";
      });
  
  
});




