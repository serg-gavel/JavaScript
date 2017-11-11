// Call geocode
geoCode();

function geoCode() {
    var location = 'Stepova St, 13 Odesa, Odessa Oblast';

    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address: location,
            key: 'AIzaSyAu-8WX_FzSxiibHrEPtXXLFLPtMzDg9K4'
        }
    })
        .then(function (response) {
            // Log full response
            console.log(response);

            // Formatted address
            var formattedAddress = response.data.results[0].formatted_address;
            var formattedAddressOutput = `
            <ul class="list-group">
                <li class="list-group-item">${formattedAddress}</li>
            </ul>
            `;

            // Output to app
            document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
        })
        .catch(function (error) {
            console.log(error);
        });
}