// Import Leaflet library
const L = window.L;

// Initialize the map
const map = L.map('map').setView([50.0, 10.0], 5); // Center on Europe

// Add a vintage-style tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    opacity: 0.8 // Slightly transparent for vintage feel
}).addTo(map);

// Add a sepia filter to the map
document.querySelector('.leaflet-container').style.filter = 'sepia(20%)';

// Elements
const infoPanel = document.getElementById('info-panel');
const locationTitle = document.getElementById('location-title');
const locationDate = document.getElementById('location-date');
const locationDescription = document.getElementById('location-description');
const locationPhoto = document.getElementById('location-photo');
const closeButton = document.getElementById('close-panel');

// Close panel event
closeButton.addEventListener('click', () => {
    infoPanel.classList.add('hidden');
});

// Create a custom icon for markers
function createCustomIcon(index) {
    return L.divIcon({
        className: 'custom-marker-icon',
        html: index,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
}

// Create a polyline to connect journey points
const journeyLine = L.polyline([], {
    color: '#8b6b4c',
    weight: 3,
    opacity: 0.7,
    dashArray: '5, 10',
    lineCap: 'round'
}).addTo(map);

// Function to display location details
function showLocationDetails(location) {
    locationTitle.textContent = location.name;
    locationDate.textContent = `Date: ${location.date || 'Unknown'}`;
    locationDescription.textContent = location.description || 'No description available.';
    
    // Set the image or use a placeholder
    if (location.image) {
        locationPhoto.src = location.image;
        locationPhoto.alt = `Historical photo of ${location.name}`;
        locationPhoto.style.display = 'block';
    } else {
        locationPhoto.src = 'https://via.placeholder.com/300x200?text=No+Image+Available';
        locationPhoto.alt = 'No image available';
        locationPhoto.style.display = 'block';
    }
    
    infoPanel.classList.remove('hidden');
}

// Function to initialize the map with journey data
function initializeJourneyMap(journeyData) {
    if (!journeyData || !journeyData.length) {
        console.error('No journey data available');
        return;
    }

    const journeyPoints = [];
    
    // Add markers for each location
    journeyData.forEach((location, index) => {
        const marker = L.marker([location.lat, location.lng], {
            icon: createCustomIcon(index + 1),
            title: location.name
        }).addTo(map);
        
        // Add click event to show details
        marker.on('click', () => {
            showLocationDetails(location);
        });
        
        // Add to journey line
        journeyPoints.push([location.lat, location.lng]);
    });
    
    // Update the journey line
    journeyLine.setLatLngs(journeyPoints);
    
    // Fit the map to show all markers
    if (journeyPoints.length > 0) {
        map.fitBounds(journeyPoints);
    }
}

// Check if journey data exists and initialize
document.addEventListener('DOMContentLoaded', () => {
    // If journey data is not defined, create sample data
    let journeyData = window.journeyData;
    if (typeof journeyData === 'undefined') {
        console.warn('No journey data found, using sample data');
        
        // Sample WWII journey data
        journeyData = [
            {
                name: "D-Day Landing - Normandy",
                lat: 49.3677,
                lng: -0.8738,
                date: "June 6, 1944",
                description: "Allied forces landed on the beaches of Normandy in the largest seaborne invasion in history, beginning the liberation of Western Europe.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Into_the_Jaws_of_Death_23-0455M_edit.jpg/320px-Into_the_Jaws_of_Death_23-0455M_edit.jpg"
            },
            {
                name: "Battle of the Bulge",
                lat: 50.2502,
                lng: 5.6667,
                date: "December 16, 1944",
                description: "The last major German offensive on the Western Front, attempting to split the Allied forces and capture Antwerp.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bastogne1944.jpg/320px-Bastogne1944.jpg"
            },
            {
                name: "Liberation of Paris",
                lat: 48.8566,
                lng: 2.3522,
                date: "August 25, 1944",
                description: "The liberation of Paris by the French 2nd Armored Division and the U.S. 4th Infantry Division.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Crowds_of_French_patriots_line_the_Champs_Elysees-edit2.jpg/320px-Crowds_of_French_patriots_line_the_Champs_Elysees-edit2.jpg"
            },
            {
                name: "Battle of Berlin",
                lat: 52.5200,
                lng: 13.4050,
                date: "April 16 - May 2, 1945",
                description: "The final major offensive of the European theatre, resulting in the capture of Berlin and Hitler's suicide.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Reichstag_after_the_allied_bombing_of_Berlin.jpg/320px-Reichstag_after_the_allied_bombing_of_Berlin.jpg"
            },
            {
                name: "VE Day - Reims",
                lat: 49.2583,
                lng: 4.0317,
                date: "May 8, 1945",
                description: "Victory in Europe Day marks the formal acceptance by the Allies of Nazi Germany's unconditional surrender.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/German_surrender_at_Reims_%28May_1945%29.jpg/320px-German_surrender_at_Reims_%28May_1945%29.jpg"
            }
        ];
        window.journeyData = journeyData;
    }
    
    // Initialize the map with journey data
    initializeJourneyMap(journeyData);
});