function initMap() {
  
  var coordinates = [{lat: 40.1720, lng: -3.6567 },
                    {lat: 40.4000, lng: -3.7167 },
                    {lat: 40.3805031, lng: -3.6336483 },
                    {lat: 40.3319506, lng: -3.7686545 }];

  var map = new google.maps.Map(document.getElementById('map'), {
   zoom: 8,
   center: coordinates[0]
  });

  coordinates.forEach(function(coords){
    var info_content = '<p>Esto es Latitud: ' + coords['lat'] + ' </p><p>Esto es Longitud:  </p>'
    var marker = new google.maps.Marker({
     position: coords,
     map: map,
     title: 'TITLE HERE',
     icon: 'assets/marker.png'
    });

    var info_window = new google.maps.InfoWindow({
     content: info_content,
     position : coords
    });

    marker.addListener('click', function() {
     info_window.open(map, marker);
    });
  })
  


}      

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

    


