
// fetch('https://restcountries.com/v2/all')
// .then(res => res.json())
// .then(data => countriesDisplay(data))

// const countriesDisplay = countries => {
//     const ul = document.getElementById('countries');
//     for(i = 0; i < countries.length; i++){
//         const country = countries[i];
//         const li = document.createElement('li');
//         li.innerText = country.name;
//         ul.appendChild(li);        
//     }
// }


//second step
// fetch('https://restcountries.com/v2/all')
// .then(res => res.json())
// .then(data => countriesDisplay(data))

// const countriesDisplay = countries => {
//     const countriesDiv = document.getElementById('countries');
//     for(i = 0; i < countries.length; i++){
//         const country = countries[i];
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';

//         const h3 = document.createElement('h3');
//         h3.innerText = country.name;
//         countriesDiv.appendChild(h3);

//         const p = document.createElement('p');
//         p.innerText = country.capital;
//         countriesDiv.appendChild(p);
            
//         countriesDiv.appendChild(countryDiv);

//     }
// }


// fetch('https://restcountries.com/v2/all')
// .then(res => res.json())
// .then(data => countriesDisplay(data))

// const countriesDisplay = countries => {
//     const countriesDiv = document.getElementById('countries');
//     for(i = 0; i < countries.length; i++){
//         const country = countries[i];
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';

//         const countryInfo = `
//         <h3 class="country-name">${country.name}</h3>
//         <p class="country-city">${country.capital}</p>
//         `;
//         countryDiv.innerHTML = countryInfo;
//         countriesDiv.appendChild(countryDiv);
//     }
// }


fetch('https://restcountries.com/v2/all')
.then(res => res.json())
.then(data => countriesDisplay(data))

const countriesDisplay = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p class="country-city">${country.capital}</p>
        <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetail = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}
const renderCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h1>Country: ${country.name}</h1>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Subregion: ${country.subregion}</p>
        <img src="${country.flag}">
    `
}











