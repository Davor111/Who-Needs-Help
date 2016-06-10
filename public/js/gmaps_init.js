

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: 48.899, lng: 9.164 }
    });
    var geocoder = new google.maps.Geocoder();


    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
 
    return map;
};


function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    

    geocoder.geocode({ 'address': address }, function (results, status) {

        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            resultsMap.setZoom(15);

            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Test</h1>' +
                '<div id="bodyContent">' +
                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                'sandstone rock formation in the southern part of the ' +
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
         
                'Aboriginal people of the area. It has many springs, waterholes, ' +
                'rock caves and ancient paintings. Uluru is listed as a World ' +
                'Heritage Site.</p>' +
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
                '(last visited June 22, 2009).</p>' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

           infowindow.open(map, marker);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
};
