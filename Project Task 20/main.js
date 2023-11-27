// Foursquare API Info
const clientId = 'TGI0LPBN5MCFNA1AE0P0UFGJRXCMKRDZQBVUCWNC1VJKBNO0';
const clientSecret = 'ZDUWMEYA430P4NGJVTAWEMGIQ2Z0GGP3NN5FLAWNNQPR0PPS';
const redirectUri = 'http://127.0.0.1:5500';
const url = 'https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v2/venues/search?';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'Origin': 'http://127.0.0.1:5500', // Set your actual website origin

    }
};
const authUrl = `https://foursquare.com/oauth2/authenticate?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
const urlParams = new URLSearchParams(window.location.search);
const authorizationCode = urlParams.get('code');
const tokenUrl = `https://cors-anywhere.herokuapp.com/https://foursquare.com/oauth2/access_token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=authorization_code&redirect_uri=${redirectUri}&code=${authorizationCode}`;

// OpenWeather Info
const openWeatherKey = 'eaf747b17fcedacb439f7c2b60b59469';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const getVenues = async () => {
    try {
        // Step 1: Exchange Code for Access Token


        const tokenResponse = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'authorization_code',
                redirect_uri: redirectUri,
                code: authorizationCode,
            }),
        });

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // Step 2: Use Access Token to Get Venues
        const v = '20231010'; // You can adjust the API version as needed
        const venueSearchUrl = `${url}near=${city}&limit=10&oauth_token=${accessToken}&v=${v}`;

        const venuesResponse = await fetch(venueSearchUrl);

        if (venuesResponse.status === 200) {
            const venuesData = await venuesResponse.json();
            
            if (venuesData.meta.code === 200) {
                const venues = venuesData.response.groups[0].items.map(item => item.venue);
                return venues;
            } else {
                console.error('Error fetching venue data:', venuesData.meta.errorDetail);
            }
        } else {
            throw new Error(`Foursquare API request failed with status ${venuesResponse.status}`);
        }
    } catch (error) {
        console.error('Error fetching data from Foursquare:', error);
    }
};




// Helper function to format date in YYYYMMDD format
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`;
};

const getForecast = async () => {
    try {
        const city = $input.val();
        const urlToFetch = `${weatherUrl}?q=${city}&appid=${openWeatherKey}`;
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.error('Error fetching weather data from OpenWeather:', error);
    }
};

// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        let venueContent = createVenueHTML(venues[index]);
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (day) => {
    let weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues().then(venues => renderVenues(venues));
    getForecast().then(forecast => renderForecast(forecast));
    return false;
};

$submit.click(executeSearch);
