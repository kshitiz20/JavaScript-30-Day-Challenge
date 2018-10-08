

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var allCities=[];

fetch(endpoint).then(function(response){
    return response.json();
}).then(function(data){
    //  console.log(JSON.stringify(data));

    allCities.push(...data);
    
});



console.log(allCities);


function searchCities(word, cities){

    return cities.filter(function(place){
        var reg= new RegExp(word,'gi');
        return place.city.match(reg)||place.state.match(reg);
    });
   
    
}

function displayCities(){
    var matchingCities= searchCities(this.value, allCities);
    console.log(matchingCities);

    var html= matchingCities.map(function(place){

        var city= place.city;
        var state= place.state;
        return `
      <li>
        <span class="name">${city}, ${state}</span>
        
      </li>
    `;
    }).join('');

    suggetions.innerHTML=html;
    
}

// searchCities('a',allCities);
var input= document.querySelector('.search');
console.log(input);

var suggetions= document.querySelector('.suggestions');

input.addEventListener('keyup', displayCities);
