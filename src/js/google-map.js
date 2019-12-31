var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.856, lng: 151.208 },
    zoom: 14
  });
}
