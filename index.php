<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/font-awesome.css">
</head>
<body>
	<header>
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<div class="container-fluid">
					<div class="navbar-header">
						<a class="navbar-brand" href="#"><i class="fa fa-map" aria-hidden="true"></i>&nbsp; Mapsgo |</a>
					</div>
					<ul class="nav navbar-nav navbar-left">
						<li><a id="full"><i class="fa fa-arrows-alt" aria-hidden="true"></i>&nbsp; FullSizeMap</a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
							<li>
								<select name="travelMode" id="travelMode" class="form-control">
									<option value="DRIVING">En voiture</option>
									<option value="WALKING">À pied</option>
									<option value="BICYCLING">À vélo</option>
									<option value="TRANSIT">En transports en commun</option>
								</select>
							</li>
							<li><input type="text" class="form-control" id="depart" placeholder="Point de départ"></li>
							<li><button class="btn btn-success" onclick="initGeolocation();" title="Trouvé votre position en un click !"><i class="fa fa-street-view" aria-hidden="true"></i></button></li>
							<li><input type="text" class="form-control" id="arrive" placeholder="Point d'arrivé"></li>
							<li><button class="btn btn-primary" onclick="initMap();">Creer mon itinéraire</button></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	<div class="container">
		<div id="my_maps" class=""></div>
		<div id="map-panel" class=""></div>
	</div>
	<footer>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwAkPTFix1nyrZmXQAtDthpZeztv_nDns&libraries=places&callback=initMap"
		async defer></script>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
	</footer>
</body>
</html>