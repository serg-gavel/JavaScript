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
            console.log(response.data.results[0].formatted_address);
        })
        .catch(function (error) {
            console.log(error);
        });
}