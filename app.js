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

// Global variables for journey navigation
let journeyLocations = [];
let currentLocationIndex = -1;

// Function to navigate to the next location
function navigateToNextLocation() {
    if (!journeyLocations.length) return;
    
    // Find the index of the current location
    const nextIndex = (currentLocationIndex + 1) % journeyLocations.length;
    
    // Get the next location
    const nextLocation = journeyLocations[nextIndex];
    
    // Use the shared function to fly to and show the location
    flyToAndShowLocation(nextLocation, nextIndex);
}

// Elements
const infoPanel = document.getElementById('info-panel');
const locationTitle = document.getElementById('location-title');
const locationDate = document.getElementById('location-date');
const locationDescription = document.getElementById('location-description');
const locationPhoto = document.getElementById('location-photo');
const closeButton = document.getElementById('close-panel');
const prevPhotoBtn = document.getElementById('prev-photo');
const nextPhotoBtn = document.getElementById('next-photo');
const nextLocationBtn = document.getElementById('next-location-btn');

// Modal elements
const imageModalOverlay = document.getElementById('image-modal-overlay');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const modalCounter = document.getElementById('modal-counter');

// Event listeners
closeButton.addEventListener('click', () => {
    infoPanel.classList.add('hidden');
});

// Photo navigation events
prevPhotoBtn.addEventListener('click', () => {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        updatePhotoGallery();
    }
});

nextPhotoBtn.addEventListener('click', () => {
    const images = currentLocation.images || (currentLocation.image ? [currentLocation.image] : []);
    if (currentPhotoIndex < images.length - 1) {
        currentPhotoIndex++;
        updatePhotoGallery();
    }
});

// Next location navigation event
nextLocationBtn.addEventListener('click', navigateToNextLocation);

// Modal event listeners
modalClose.addEventListener('click', closeImageModal);
imageModalOverlay.addEventListener('click', (e) => {
    // Close only if clicking outside the image modal
    if (e.target === imageModalOverlay) {
        closeImageModal();
    }
});

// Modal navigation buttons
modalPrev.addEventListener('click', () => {
    const images = currentLocation.images || (currentLocation.image ? [currentLocation.image] : []);
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        updatePhotoGallery();
        updateModalImage();
    }
});

modalNext.addEventListener('click', () => {
    const images = currentLocation.images || (currentLocation.image ? [currentLocation.image] : []);
    if (currentPhotoIndex < images.length - 1) {
        currentPhotoIndex++;
        updatePhotoGallery();
        updateModalImage();
    }
});

// Function to open the image modal with the current photo
function openImageModal() {
    const images = currentLocation.images || (currentLocation.image ? [currentLocation.image] : []);
    if (images.length === 0) return;
    
    updateModalImage();
    imageModalOverlay.classList.add('active');
    
    // Prevent scrolling the body when the modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close the image modal
function closeImageModal() {
    imageModalOverlay.classList.remove('active');
    // Restore scrolling
    document.body.style.overflow = '';
}

// Function to update the modal image
function updateModalImage() {
    const images = currentLocation.images || (currentLocation.image ? [currentLocation.image] : []);
    if (images.length === 0) return;
    
    modalImage.src = images[currentPhotoIndex];
    modalImage.alt = `Historical photo of ${currentLocation.name}`;
    
    // Update counter and button states in modal
    modalCounter.textContent = `${currentPhotoIndex + 1}/${images.length}`;
    modalPrev.disabled = currentPhotoIndex === 0;
    modalNext.disabled = currentPhotoIndex === images.length - 1;
}

// Function to fly to a specific location by index
function flyToLocationByIndex(index) {
    if (index >= 0 && index < journeyLocations.length) {
        const location = journeyLocations[index];
        // Use the shared function to fly to and show the location
        flyToAndShowLocation(location, index);
    }
}

// Function to find a location by name (partial match)
function findLocationByName(nameFragment) {
    return journeyLocations.findIndex(location => 
        location.name.toLowerCase().includes(nameFragment.toLowerCase())
    );
}

// Function to fly to a location and show its details
function flyToAndShowLocation(location, index) {
    // Update current location index
    currentLocationIndex = index;
    
    // Fly to the location with animation
    map.flyTo([location.lat, location.lng], 9, {
        duration: 1.5 // Duration in seconds
    });
    
    // Show location details after a short delay to let the animation complete
    setTimeout(() => {
        showLocationDetails(location);
        
        // Add visual highlight to marker
        const markers = document.querySelectorAll('.leaflet-marker-icon');
        if (markers[index]) {
            markers[index].classList.add('marker-highlight');
            setTimeout(() => {
                markers[index].classList.remove('marker-highlight');
            }, 500);
        }
    }, 1000);
}

// Add event listeners for navigation buttons
document.addEventListener('DOMContentLoaded', () => {
    // Jump to buttons
    const jumpToStartBtn = document.getElementById('jump-to-start');
    const jumpToCherburgBtn = document.getElementById('jump-to-cherbourg');
    const jumpToRussiansBtn = document.getElementById('jump-to-russians');
    
    jumpToStartBtn.addEventListener('click', () => {
        // Jump to the first location (index 0)
        flyToLocationByIndex(0);
    });
    
    jumpToCherburgBtn.addEventListener('click', () => {
        // Find and jump to Cherbourg location
        const cherburgIndex = findLocationByName('cherbourg');
        if (cherburgIndex >= 0) {
            flyToLocationByIndex(cherburgIndex);
        }
    });
    
    jumpToRussiansBtn.addEventListener('click', () => {
        // Find and jump to location mentioning Russians or meeting Russian forces
        const russianIndex = findLocationByName('russian') >= 0 ? 
            findLocationByName('russian') : 
            journeyLocations.length - 2; // Fallback to second-to-last location if not found
        
        if (russianIndex >= 0) {
            flyToLocationByIndex(russianIndex);
        }
    });
    
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
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Into_the_Jaws_of_Death_23-0455M_edit.jpg/320px-Into_the_Jaws_of_Death_23-0455M_edit.jpg",
                    "https://www.army.mil/e2/images/rv7/dday/then/sc320901.jpg",
                    "https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-07/omaha-beach-landing-craft.jpg"
                ]
            },
            {
                name: "Battle of the Bulge",
                lat: 50.2502,
                lng: 5.6667,
                date: "December 16, 1944",
                description: "The last major German offensive on the Western Front, attempting to split the Allied forces and capture Antwerp.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bastogne1944.jpg/320px-Bastogne1944.jpg",
                    "https://www.nationalww2museum.org/sites/default/files/2017-07/battle-of-the-bulge.jpg"
                ]
            },
            {
                name: "Liberation of Paris",
                lat: 48.8566,
                lng: 2.3522,
                date: "August 25, 1944",
                description: "The liberation of Paris by the French 2nd Armored Division and the U.S. 4th Infantry Division.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Crowds_of_French_patriots_line_the_Champs_Elysees-edit2.jpg/320px-Crowds_of_French_patriots_line_the_Champs_Elysees-edit2.jpg"
                ]
            },
            {
                name: "Battle of Berlin",
                lat: 52.5200,
                lng: 13.4050,
                date: "April 16 - May 2, 1945",
                description: "The final major offensive of the European theatre, resulting in the capture of Berlin and Hitler's suicide.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Reichstag_after_the_allied_bombing_of_Berlin.jpg/320px-Reichstag_after_the_allied_bombing_of_Berlin.jpg",
                    "https://history.army.mil/books/wwii/basel/photos/p543.jpg"
                ]
            },
            {
                name: "VE Day - Reims",
                lat: 49.2583,
                lng: 4.0317,
                date: "May 8, 1945",
                description: "Victory in Europe Day marks the formal acceptance by the Allies of Nazi Germany's unconditional surrender.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/German_surrender_at_Reims_%28May_1945%29.jpg/320px-German_surrender_at_Reims_%28May_1945%29.jpg",
                    "https://media.iwm.org.uk/ciim5/252/407/large_000000.jpg"
                ]
            }
        ];
        window.journeyData = journeyData;
    }
    
    // Initialize the map with journey data
    initializeJourneyMap(journeyData);
    
    // Add keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        // If modal is active
        if (imageModalOverlay.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeImageModal();
            } else if (e.key === 'ArrowLeft' && !modalPrev.disabled) {
                modalPrev.click();
            } else if (e.key === 'ArrowRight' && !modalNext.disabled) {
                modalNext.click();
            } else if (e.key === ' ' || e.key === 'Enter') {
                // Space or Enter also close the modal for accessibility
                closeImageModal();
            }
        }
    });
});

// Create a custom icon for markers
function createCustomIcon(index) {
    return L.divIcon({
        className: 'custom-marker-icon',
        html: `<div class="pin-container"><div class="pin"></div><span class="pin-number">${index}</span></div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
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

// Variables for photo gallery
let currentPhotoIndex = 0;
let currentLocation = null;

// Function to display location details
function showLocationDetails(location) {
    locationTitle.textContent = location.name;
    locationDate.textContent = `Date: ${location.date || 'Unknown'}`;
    locationDescription.textContent = location.description || 'No description available.';
    
    // Store the current location
    currentLocation = location;
    currentPhotoIndex = 0;
    
    // Find the index of the current location
    currentLocationIndex = journeyLocations.findIndex(loc => 
        loc.lat === location.lat && 
        loc.lng === location.lng && 
        loc.name === location.name
    );
    
    // Update next location button state
    const isLastLocation = currentLocationIndex === journeyLocations.length - 1;
    nextLocationBtn.textContent = isLastLocation 
        ? 'Return to First Location' 
        : 'Continue to Next Location →';
    
    // Set up the photo gallery
    updatePhotoGallery();
    
    infoPanel.classList.remove('hidden');
}

// Function to update the photo gallery
function updatePhotoGallery() {
    const galleryContainer = document.getElementById('photo-gallery-container');
    const photoCounter = document.getElementById('photo-counter');
    
    // Clear existing photos
    galleryContainer.innerHTML = '';
    
    // Get images array (handle both new images array and old image property for backwards compatibility)
    let images = currentLocation.images || [];
    if (!images.length && currentLocation.image) {
        images = [currentLocation.image];
    }
    
    // If no images, show a placeholder
    if (images.length === 0) {
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/300x200?text=No+Image+Available';
        img.alt = 'No image available';
        img.className = 'location-photo';
        galleryContainer.appendChild(img);
        
        // Disable navigation
        photoCounter.textContent = '0/0';
        prevPhotoBtn.disabled = true;
        nextPhotoBtn.disabled = true;
        prevPhotoBtn.style.display = 'none';
        nextPhotoBtn.style.display = 'none';
        return;
    }
    
    // Create container for the photo and the magnify icon
    const photoContainer = document.createElement('div');
    photoContainer.style.position = 'relative';
    
    // Create and add the current image
    const img = document.createElement('img');
    img.src = images[currentPhotoIndex];
    img.alt = `Historical photo of ${currentLocation.name}`;
    img.className = 'location-photo';
    img.addEventListener('click', openImageModal); // Allow clicking the image to also open modal
    photoContainer.appendChild(img);
    
    // Add magnify icon
    const magnifyIcon = document.createElement('div');
    magnifyIcon.className = 'magnify-icon';
    magnifyIcon.title = 'Click to enlarge';
    magnifyIcon.addEventListener('click', openImageModal);
    photoContainer.appendChild(magnifyIcon);
    
    // Add the container to the gallery
    galleryContainer.appendChild(photoContainer);
    
    // Update counter and button states
    if (images.length > 1) {
        photoCounter.textContent = `${currentPhotoIndex + 1}/${images.length}`;
        prevPhotoBtn.disabled = currentPhotoIndex === 0;
        nextPhotoBtn.disabled = currentPhotoIndex === images.length - 1;
        prevPhotoBtn.style.display = '';
        nextPhotoBtn.style.display = '';
        photoCounter.style.display = '';
    } else {
        photoCounter.textContent = '';
        prevPhotoBtn.disabled = true;
        nextPhotoBtn.disabled = true;
        prevPhotoBtn.style.display = 'none';
        nextPhotoBtn.style.display = 'none';
        photoCounter.style.display = 'none';
    }
}

// Function to initialize the map with journey data
function initializeJourneyMap(journeyData) {
    if (!journeyData || !journeyData.length) {
        console.error('No journey data available');
        return;
    }

    // Store journey locations globally for navigation
    journeyLocations = journeyData;
    
    const journeyPoints = [];
    
    // Add markers for each location
    journeyData.forEach((location, index) => {
        const marker = L.marker([location.lat, location.lng], {
            icon: createCustomIcon(index + 1),
            title: location.name
        }).addTo(map);
        
        // Add click event to zoom in and show details
        marker.on('click', () => {
            flyToAndShowLocation(location, index);
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