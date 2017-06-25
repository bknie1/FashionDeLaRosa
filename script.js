$(document).ready(function () {

	// create a LatLng object containing the coordinate for the center of the map
	var latlng = new google.maps.LatLng(41.218603, -73.215365);

	// prepare the map properties
	var options = {
	zoom: 15,
	center: latlng,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	navigationControl: true,
	mapTypeControl: false,
	scrollwheel: false,
	disableDoubleClickZoom: true
	};

	// Initialize the map object
	var map = new google.maps.Map(document.getElementById('map'), options);

	// Add Marker
	var marker1 = new google.maps.Marker( {
	position: latlng, map: map
	});

	// Add listener for a click on the pin.
	google.maps.event.addListener(marker1, 'click', function() {
	infowindow.open(map, marker1);
	});

	// Add information window.
	var infowindow = new google.maps.InfoWindow({
	content:  '<div class="info"><strong>Fashion De La Rosa</strong><br>4267 Main St.<br>Bridgeport, CT 06606<br><br><strong>Phone: </strong>(203) 936-7672</div>'
	});
});