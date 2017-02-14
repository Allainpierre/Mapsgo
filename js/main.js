var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initMap() {
	var depart = document.getElementById('depart').value;
	var arrive = document.getElementById('arrive').value;

	if(depart != '' && arrive != ''){
		var map = new google.maps.Map(document.getElementById('my_maps'), {
			scrollwheel: false,
			fullscreenControl: true,
			zoom: 10
		});	

		var directionsDisplay = new google.maps.DirectionsRenderer({
			map: map
		});

		var travelMode = document.getElementById('travelMode').value;

		var request = {
			destination: arrive,
			origin: depart,
			travelMode: travelMode
		};

		var directionsService = new google.maps.DirectionsService();
		directionsService.route(request, function(response, status) {
			if (status == 'OK') {
				directionsDisplay.setDirections(response);
				document.getElementById('map-panel').innerHTML = "";
				directionsDisplay.setPanel(document.getElementById("map-panel"));
			}
		})
		var request = {
			location: depart,
			radius: '500',
			query: 'restaurant'
		};

		service = new google.maps.places.PlacesService(map);
		service.textSearch(request, callback);

		google.maps.event.trigger(map, 'resize');
	}else{
		var map = new google.maps.Map(document.getElementById('my_maps'), {
			center: {lat: -34.397, lng: 150.644},
			scrollwheel: false,
			fullscreenControl: true,
			zoom: 10	
		})
		google.maps.event.trigger(map, 'resize');
	}
	var auto_depart = document.getElementById('depart');
	var autocomplete = new google.maps.places.Autocomplete(auto_depart);

	var auto_arrive = document.getElementById('arrive');
	var autocomplete = new google.maps.places.Autocomplete(auto_arrive);

	autocomplete.bindTo('bounds', map);

	google.maps.event.addListener(map, 'click', function (event) {
		new google.maps.Marker({
			map: map,
			label: labels[labelIndex++ % labels.length],
			position: new google.maps.LatLng(event.latLng.lat(), event.latLng.lng())
		});
	});

}

function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
			var place = results[i];
			createMarker(results[i]);
		}
	}
}

function initGeolocation() {

	if( navigator.geolocation )
	{
		navigator.geolocation.getCurrentPosition( success, fail );
	}
	else
	{
		alert('failed geolocation');
	}
}

function success(pos){
	var lat = pos.coords.latitude;
	var lon = pos.coords.longitude;
	document.getElementById('depart').value = lat + ', ' +lon;
}

function fail(){
	alert('failed geolocation');
}

$(document).ready(function(){
	$('#full').click(function(){
		$('#my_maps').toggleClass('full');
		$('#map-panel').toggleClass('full');
		$('#my_maps').removeAttr('style');
		initMap();
	})
});