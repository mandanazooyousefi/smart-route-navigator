// Global değişkenler
let map;
let graphData;
let startNode = null;
let endNode = null;
let markers = [];
let pathLine = null;

// Haritayı başlat
function initMap() {
  map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Veriyi yükle
  fetch('graph-data.json')
    .then(response => response.json())
    .then(data => {
      graphData = data;
      addMarkers();
    });

  // Haritaya tıklama olayı
  map.on('click', onMapClick);
}

// Marker'ları haritaya ekle
function addMarkers() {
  for (let node of graphData.nodes) {
    const [lat, lng] = graphData.coordinates[node];
    const marker = L.marker([lat, lng]).addTo(map)
      .bindPopup(`Node: ${node}`);
    markers.push({ marker, node });
  }
}

// Tıklanınca en yakın düğümü bul
function onMapClick(e) {
  if (!graphData || !graphData.coordinates) return;

  const nearestNode = findNearestNode(e.latlng);
  if (!startNode) {
    startNode = nearestNode;
    alert(`Start node selected: ${startNode}`);
  } else if (!endNode) {
    endNode = nearestNode;
    alert(`End node selected: ${endNode}`);
    findPath();
  } else {
    resetSelection();
  }
}

// Tıklanan yere en yakın düğüm
function findNearestNode(latlng) {
  let nearest = null;
  let nearestDistance = Infinity;

  for (let node of graphData.nodes) {
    const [lat, lng] = graphData.coordinates[node];
    const distance = Math.sqrt(
      Math.pow(latlng.lat - lat, 2) + Math.pow(latlng.lng - lng, 2)
    );
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = node;
    }
  }

  return nearest;
}

// Dijkstra ile en kısa yolu bul
function findPath() {
  const result = dijkstra(graphData, startNode, endNode);

  if (!result.path || result.path.length === 0) {
    alert("No path found!");
    return;
  }

  const latlngs = result.path.map(node => graphData.coordinates[node]);

  if (pathLine) {
    map.removeLayer(pathLine);
  }

  pathLine = L.polyline(latlngs, { color: 'red' }).addTo(map);
  map.fitBounds(pathLine.getBounds());

  alert(`Path: ${result.path.join(' -> ')}\nDistance: ${result.distance}`);
}

// Seçimi sıfırla
function resetSelection() {
  startNode = null;
  endNode = null;
  if (pathLine) {
    map.removeLayer(pathLine);
    pathLine = null;
  }
  alert("Selection reset. Please click start and end points again.");
}

// Sayfa yüklenince başlat
window.onload = initMap;
