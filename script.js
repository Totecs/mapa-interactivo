let puntos = [];
var map = L.map('map').setView([-34.6037, -58.3816], 13);
var conjunto = L.featureGroup().addTo(map);
var borrar = document.getElementById("boton");
var marker = L.icon({
    iconUrl: 'marker.png',

    iconSize:     [38, 95], 
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76] 
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: 'OpenStreetMap'
}).addTo(map);
var marker = L.marker([-34.6037, -58.3816], {icon: marker})
   .addTo(conjunto)
   .bindPopup("Ubicación inicial")
   
var marker = L.marker([-36.6037, -58.3816], {icon: marker})
   .addTo(conjunto)
   .bindPopup("Ubicación 2")
   
var marker = L.marker([-35.6037, -58.3816], {icon: marker})
   .addTo(conjunto)
   .bindPopup("Ubicación 1")



   map.on('click', function(e) {
   alert("Lat: " + e.latlng.lat + " Lng: " + e.latlng.lng);
});
    map.on('click', function(e) {
    puntos.push([e.latlng.lat, e.latlng.lng]);

    if (puntos.length === 4) {
        L.polyline(puntos, { color: 'blue' }).addTo(conjunto);
    }
});

boton.addEventListener("click", function() {
    puntos = [];
    conjunto.clearLayers();
    
});
    	