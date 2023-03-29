/*
 * Name: Jackson Coffey
 * Description: Leaflet JavaScript Map
 * Created: 02/28/23
 * Last Updated: 03/20/23
 */


/* Initializing Map */
var map = L.map('map').setView([36.30258584306485, -82.369561252428231], 16);
map.options.minZoom = 17;
map.options.maxZoom = 18;
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(map);

    
// /* Alerting the user their location is found */
// map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

/* Location error handler */
map.on('locationerror', onLocationError);

/* Locating the user and setting the map accordingly */
map.locate({watch: true, maxZoom: 20, minZoom: 16});
 /* UNDO THIS!!!! */

    // placeholders for the L.marker and L.circle representing user's current position and accuracy    
    var current_position, current_accuracy;

    function onLocationFound(e) {
      // if position defined, then remove the existing position marker and accuracy circle from the map
      if (current_position) {
          map.removeLayer(current_position);
          map.removeLayer(current_accuracy);
      }

      var radius = e.accuracy / 1;

      // user marker position
      current_position = L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup().on('click', clickZoom);

      // adding circle marker around user position
      current_accuracy = L.circle(e.latlng, radius).addTo(map);
    }


/* Center on Click */
function clickZoom(e) {
    map.setView(e.target.getLatLng(),20);
}

function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

//   // wrap map.locate in a function    
//   function locate() {
//     map.locate({setView: true, maxZoom: 16});
//   }

//   // call locate every 5 seconds... forever
//   setInterval(locate, 5000);


/* Polygon (line) style */
var myStyle =
{
    color: '#FFC72C',
    weight: 8
};

/* ------ Routes ------ */


/* -------------------------
----------------------------
-- Nicks -> Roger Stout --
----------------------------
----------------------------
*/
var latlngs = [
    [36.302273, -82.368134],
    [36.3021821190685, -82.36847740713418],];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.3021821190685, -82.36847740713418],
    [36.30273982899117, -82.36870962343818]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30273982899117, -82.36870962343818],
    [36.302812442489916, -82.36840168958354]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.302812442489916, -82.36840168958354],
    [36.30291025466817, -82.3682173865099]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30291025466817, -82.3682173865099],
    [36.302954934264335, -82.36819341212635]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.302954934264335, -82.36819341212635],
    [36.30291386708225, -82.36758523097755]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30291386708225, -82.36758523097755],
    [36.30312058519061, -82.36725585288885]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30312058519061, -82.36725585288885],
    [36.303194580745355, -82.36689441145352]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.303194580745355, -82.36689441145352],
    [36.303454388894515, -82.36630350007242]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

/* -------------------------
----------------------------
-- Roger Stout -> Library --
----------------------------
----------------------------
*/

var latlngs = [
    [36.303271969080086, -82.36671265989668],
    [36.30277577704209, -82.36637150067385]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);



var latlngs = [
    [36.30277577704209, -82.36637150067385], 
    [36.302663523317634, -82.36627056599555]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);



/* -------------------------
----------------------------
-- Library -> Culp --
----------------------------
----------------------------
*/
var latlngs = [
    [36.302663523317634, -82.36627056599555],
    [36.30260551501323, -82.36649867837525]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30260551501323, -82.36649867837525],
    [36.30224298654592, -82.36665973263456]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);


var latlngs = [
    [36.30224298654592, -82.36665973263456],
    [36.302184802807844, -82.36663196465881]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);




/* -------------------------
----------------------------
-- Culp -> CPA --
----------------------------
----------------------------
*/
var latlngs = [
    [36.30142, -82.36791],
    [36.30119, -82.36835]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30119, -82.36835],
    [36.30042, -82.37002]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30042, -82.37002], 
    [36.29931, -82.37245]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.29931, -82.37245],
    [36.29931, -82.37263]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.29931, -82.37263],
    [36.29950, -82.37262]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.29950, -82.37262],
    [36.30007, -82.37301]];
 
var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30007, -82.37301],
    [36.30000, -82.37316]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30000, -82.37316],
    [36.30016, -82.37329]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30016, -82.37329],
    [36.30042, -82.37339]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30042, -82.37339],
    [36.30018, -82.37397]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);


/* -------------------------
----------------------------
CPA ->  ETSU/Ballad Health Athletic Center
----------------------------
----------------------------
*/
var latlngs = [
    [36.30042, -82.37339],
    [36.30068, -82.37339]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30068, -82.37339],
    [36.30090, -82.37332]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30090, -82.37332],
    [36.30108, -82.37324]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30108, -82.37324],
    [36.30140, -82.37338]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30140, -82.37338],
    [36.30213, -82.37389]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30213, -82.37389],
    [36.30222, -82.37371]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30222, -82.37371],
    [36.30258, -82.37292]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30258, -82.37292],
    [36.30299, -82.37212]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30299, -82.37212],
    [36.30289, -82.37203]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30289, -82.37203],
    [36.30302, -82.37177]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30302, -82.37177],
    [36.30307, -82.37147]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);




/* -------------------------
----------------------------
ETSU/Ballad Health Athletic Center - > ETSU Martin Center for the Arts
----------------------------
----------------------------
*/
var latlngs = [
    [36.30307, -82.37147],
    [36.30284, -82.37126]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30284, -82.37126],
    [36.30272, -82.37114]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30272, -82.37114],
    [36.30285, -82.37087]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30285, -82.37087],
    [36.30331, -82.37006]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30331, -82.37006],
    [36.30350, -82.36970]];
var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30350, -82.36970],
    [36.30386, -82.36995]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30386, -82.36995],
    [36.30405, -82.37003]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30405, -82.37003],
    [36.30413, -82.36993]];
    
var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30413, -82.36993],
    [36.30434, -82.37006]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30434, -82.37006],
    [36.30444, -82.37038]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30444, -82.37038],
    [36.30460, -82.37055]];
    
var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30460, -82.37055],
    [36.30505, -82.37091]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30505, -82.37091],
    [36.30492, -82.37091]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30492, -82.37091],
    [36.30461, -82.37147]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30461, -82.37147],
    [36.30479, -82.37158]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);



/* -------------------------
----------------------------
ETSU Martin Center for the Arts -> Millennium Center
----------------------------
----------------------------
*/
var latlngs = [
    [36.30505, -82.37091],
    [36.30526, -82.37064]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30526, -82.37064],
    [36.30569, -82.37105]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

var latlngs = [
    [36.30569, -82.37105],
    [36.30570, -82.37121]];

var polygon = L.polygon(latlngs, myStyle).addTo(map);

/* ------ Map Markers ------- */

/* 1. Roy S. Nicks Hall */
var nicksIcon = L.icon({
    iconUrl: 'markers/custom-1.png',

    
    iconSize:     [42, 47], // size of the icon
    iconAnchor:   [27, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-5, -45] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.302392, -82.367858], {icon: nicksIcon}).addTo(map).bindPopup("<b>Roy S. Nicks Hall</b>").on('click', clickZoom);

/* 2. Roger-Stout Hall */
var stoutIcon = L.icon({
    iconUrl: 'markers/custom-2.png',

    
    iconSize:     [42, 47], // size of the icon
    iconAnchor:   [27, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-5, -45] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30331906174627, -82.36617670369293], {icon: stoutIcon}).addTo(map).bindPopup("<b>Roger-Stout Hall</b>").on('click', clickZoom);

/* 3. Charles C. Sherrod Library */
var sherrodIcon = L.icon({
    iconUrl: 'markers/custom-3.png',

    
    iconSize:     [42, 47], // size of the icon
    iconAnchor:   [27, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-5, -45] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30263991044142, -82.3657496092193], {icon: sherrodIcon}).addTo(map).bindPopup("<b>Charles C. Sherrod Library</b>").on('click', clickZoom);

/* 4. The D.P Culp Student Center */
var culpIcon = L.icon({
    iconUrl: 'markers/custom-4.png',

    
    iconSize:     [42, 47], // size of the icon
    iconAnchor:   [27, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-5, -45] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.301435931913495, -82.36689001887989], {icon: culpIcon}).addTo(map).bindPopup("<b>The D.P. Culp Student Center</b>").on('click', clickZoom);

/* 5. ETSU Basler Center for Physical Activity */
var cpaIcon = L.icon({
    iconUrl: 'markers/custom-5.png',

    
    iconSize:     [42, 47], // size of the icon
    iconAnchor:   [27, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-5, -45] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.299940355472835, -82.37421758487031], {icon: cpaIcon}).addTo(map).bindPopup("<b>ETSU Basler Center for Physical Activity</b>").on('click', clickZoom);

/* 6. ETSU/Ballad Health Athletic Center */
var hacIcon = L.icon({
    iconUrl: 'markers/custom-6.png',

    
    iconSize:     [42, 47], // size of the icon
    iconAnchor:   [27, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-5, -45] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30367130821872, -82.37098820515777], {icon: hacIcon}).addTo(map).bindPopup("<b>ETSU/Ballad Health Athletic Center</b>").on('click', clickZoom);

/* 7. ETSU Martin Center for the Arts */
var martinIcon = L.icon({
    iconUrl: 'markers/custom-7.png',

    
    iconSize:     [42, 47], // size of the icon
    iconAnchor:   [27, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-5, -45] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.304808824229816, -82.37188733396003], {icon: martinIcon}).addTo(map).bindPopup("<b>ETSU Martin Center for the Arts</b>").on('click', clickZoom);

/* 8. ETSU Martin Center for the Arts */
var mcIcon = L.icon({
    iconUrl: 'markers/custom-8.png',

    
    iconSize:     [42, 47], // size of the icon
    iconAnchor:   [27, 46], // point of the icon which will correspond to marker's location
    popupAnchor:  [-5, -45] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30564150823485, -82.37119166146188], {icon: mcIcon}).addTo(map).bindPopup("<b>ETSU Millennium Center</b>").on('click', clickZoom);