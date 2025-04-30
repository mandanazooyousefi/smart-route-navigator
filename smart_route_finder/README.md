

## Student Info

- **Name:** Mandana Zooyousefin  
- **Student ID: 180709711  
- **Advisor: Dr. Bekir Taner Dinçer  
- **Course: CENG 3511 – Artificial Intelligence  


# Smart Route Navigator

A simple web app to graphically display the **minimum path** between two points chosen by the user through **Dijkstra's Algorithm** on a responsive **Leaflet. js** map.



## Project Overview

**Class**: CENG 3511 – Artificial Intelligence
**Project Name:** Intelligent Route Navigator
**GOAL:** Implement Dijkstra’s Algorithm on a Leaflet map in order to determine and draw the shortest route between any two nodes.



## ✨ Features

- Map Interactive with Leaflet. js
- Local nodes (points) edges (connections) and coordinates for the system.
- Tap on the map to select Start and End points
- Auto-connects to the closest node
- Shortest path is found using Dijkstra's Algorithm
- Marks the route with a red line on the map
- Shows the total distance in a pop-up alert


## 📂 Folder Structure
```
smart-route-finder/
├── index. html         # Main HTML file (Has map and structure)
├── style. css # Styling for the map and page
├── script. js  # Processes map events, selects nodes, and draws paths
├── dijkstra. js        # Dijkstra short path in JavaScript
├── graph-data. json # Graph data : nodes, edges, coordinate information.
├── README. md\ # Project description and how to use it (this file)
```



## 🛠️ Technologies Used

- HTML, CSS, JavaScript
- [Leaflet. js](https://leafletjs.com/)
- Custom Dijkstra implemented in JavaScript
\- Live Server (VS Code extension)



## ▶️ How to Run

1. Download or clone this repository.
2. Open the project folder in **Visual Studio Code**. Create StartBarnard where your files would have been if you are using govscode.
3. Install the **Live Server** extension and use that.
4. Right-click on `index. html` → *"Open with Live Server"*.
5. Click on the map to select a start and end node -- shortest path will be displayed.



## 🔖 Sample Graph (graph-data. json)

```json
{
"nodes": ["A", "B", "C", "D"]
  "edges": {
"A": [{"node":"B", "weight":2}, {"node":"C", "weight":4}],
"B": [ {"node": "C", "weight": 1}, {"node": "D", "weight": 7}],
"C": [ {"node": "D", "weight": 3},
    "D": []
  },
  "coordinates": {
    "A": [51.505, -0.09],
    "B": [51.51, -0.1],
    "C": [51.52, -0.12],
    "D": [51.515, -0.13]
  }
}
```
