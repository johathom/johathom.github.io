//========== Mapbox
var map = L.mapbox.map('map', 'diccfish.map-fwz7rlzv')
  .setView( [30, -30], 2);
 
map.scrollWheelZoom.disable();
    
// Link Address to Google Map Directions
function popupLink() {
    $('.marker-title').on('click', function() { 
        window.open( 'http://maps.google.com/?q=' + $(this).html() );    
    });
}

// Link sidebar with map locations
map.markerLayer.on('ready', function(e) {

  // Grab the Legend
  var legend = document.getElementById('map-legend');

  // Prepend each location under the legend div
  var allPoints = map.markerLayer.eachLayer( function(e) { 
    $(legend).prepend('<section class="poi">' + e.feature.properties.title + '</section>'); 
  });

  // Attach click event to new sections
  $('.poi').on('click', function() {
        
    $title = $(this).html();

    map.markerLayer.eachLayer( function(marker) {
      if (marker.feature.properties.title === $title ) {
        marker.openPopup();
        map.panTo(marker.getLatLng());
        popupLink();
      }
    });
  });
});