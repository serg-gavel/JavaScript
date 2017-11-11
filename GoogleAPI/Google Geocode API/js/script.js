// Call geocode
geoCode();

function geoCode() {
    var location = '22 Main st Boston MA';

    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address: location,
            key: 'AIzaSyAu-8WX_FzSxiibHrEPtXXLFLPtMzDg9K4'
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}