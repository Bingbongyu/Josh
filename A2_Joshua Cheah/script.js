/*
grab function is created to initialize promise and parses data to enable readability 
*/
const grab = (api) =>{
    return new Promise(function(resolve, reject){
        fetch(api)
        .then(function(data){
            const parsed = data.json();
            if(parsed){
                resolve(parsed);
            }
            else{
                reject("No Data Available.");
            }
        })
    });
}

//variables created for weather forecast, 
//varaibles asked for: temperature and description(main/description)
var Namine = document.querySelector(".I0");
var temp = document.querySelector(".I1");
var current = document.querySelector(".I2");
var desc = document.querySelector(".I3");
//icon
var icon = document.querySelector(".icon");

//uses actual api, while it is parsed  
grab("http://api.openweathermap.org/data/2.5/weather?q=Calgary&units=metric&appid=a9f3038aa1cf1bd45838dcc82d020a54")
//presenting the data to the page 
.then(function(data){
    //log the entire list from the API to use as reference
    console.log(data);

    //prints to the table in html 

    Namine.innerHTML = data.name;
    temp.innerHTML = data.main.temp;

    //for some reason the weather object is an array but all of the information we want
    //is in the first block of the array so i just hard coded what i wanted 
    //it has the length and the proto in the array aswell *shrugs shoulders*
    current.innerHTML = data.weather[0].main;
    desc.innerHTML = data.weather[0].description;
})
.then(function(data){
    const result = data.results;
})
.catch(function(err){
    console.error("error: ", err);
});




