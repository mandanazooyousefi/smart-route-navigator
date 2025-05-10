let map;
let routingControl = null;
let startPoint = null;
let endPoint = null;

function initMap() {
  map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  map.on('click', onMapClick);
}

function onMapClick(e) {
  if (!startPoint) {
    startPoint = e.latlng;
    alert(`Start point selected: ${startPoint.lat.toFixed(5)}, ${startPoint.lng.toFixed(5)}`);
  } else if (!endPoint) {
    endPoint = e.latlng;
    alert(`End point selected: ${endPoint.lat.toFixed(5)}, ${endPoint.lng.toFixed(5)}`);
    drawRoute();
  } else {
    resetSelection();
  }
}

function drawRoute() {
  if (routingControl) {
    map.removeControl(routingControl);
  }

  routingControl = L.Routing.control({
    waypoints: [
      startPoint,
      endPoint
    ],
    routeWhileDragging: false
  }).addTo(map);
}

function resetSelection() {
  startPoint = null;
  endPoint = null;
  if (routingControl) {
    map.removeControl(routingControl);
    routingControl = null;
  }
  alert("Selection reset. Please click start and end points again.");
}

window.onload = initMap;
