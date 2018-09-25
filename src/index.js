console.log("Paola and Tyler")

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoicHpvaWRpczE0IiwiYSI6ImNqbWk3cjRvczAyNWYzcG00Y2xjaHpyY3YifQ.dzRxy2_Ko03SuG78hRRQww";
// from mapbox site

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div')
// creates a dom element out of the div id from index.html ('map')
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map)
