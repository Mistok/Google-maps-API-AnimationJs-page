
function initMap() {
    var element = document.getElementById('map');
 	var options = {
 	 	zoom: 5,
 	 	center: {lat: 48.390240, lng:  9.938315 }
 	};
	var myMap = new google.maps.Map(element, options),
		// berlin
		marker1 = new google.maps.Marker({position: {lat: 52.471301, lng: 13.405978}, map: myMap}),
		// paris
	 	marker2 = new google.maps.Marker({position: {lat: 48.845961, lng: 2.335728}, map: myMap}),
	 	// vien
	 	marker3 = new google.maps.Marker({position: {lat: 48.185267, lng: 16.365800}, map: myMap}),
	 	// montreux
	 	marker4 = new google.maps.Marker({position: {lat: 46.429459, lng: 6.914912}, map: myMap});

}
initMap();