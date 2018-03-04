
function initMap() {
    var ashtarak = {lat: 40.288, lng: 44.293};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: ashtarak
    });
    var marker = new google.maps.Marker({
        position: ashtarak,
        map: map,
        icon: 'img/marker.png'
    });
}

