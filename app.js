// require esri-leaflet
var L = require('./node_modules/esri-leaflet/dist/esri-leaflet.js');


// --------------
// Create plain Leaflet map
// --------------
var plainLeaflet = function(){ 
  // specify the path to the leaflet images folder
  L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';
   
  // initialize the map
  var map = L.map('map', {
    scrollWheelZoom: false
  });
   
  // set the position and zoom level of the map
  map.setView([47.63, -122.32], 11);
   
  // set an attribution string
  var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>';
   
  // set the tiles the map will use
  var tiles = 'http://{s}.tile.cloudmade.com/f27c8674933c4188a9b5d3222a002db8/997/256/{z}/{x}/{y}.png';
   
  // create a tileLayer with the tiles, attribution
  var layer = L.tileLayer(tiles, {
    maxZoom: 18,
    attribution: attribution
  });
   
  // add the tile layer to the map
  layer.addTo(map);
};


// --------------
// Create esri Leaflet map
// --------------
var esriLeaflet = function(){
  // ESRI Leaflet Map
  var map = L.map('esri-map').setView([45.528, -122.680], 13);

  L.esri.basemapLayer("Gray").addTo(map);

  var parks = new L.esri.FeatureLayer("http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Portland_Parks/FeatureServer/0", {
   style: function () {
      return { color: "#70ca49", weight: 2 };
    }
  }).addTo(map);

  var popupTemplate = "<h3>{NAME}</h3>{ACRES} Acres<br><small>Property ID: {PROPERTYID}<small>";

  parks.bindPopup(function(feature){
    return L.Util.template(popupTemplate, feature.properties)
  });
};

plainLeaflet();
esriLeaflet();
