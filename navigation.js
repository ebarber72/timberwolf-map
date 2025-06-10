// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-link, .cta-button');
    const sections = document.querySelectorAll('.content-section');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            if (targetSection) {
                showSection(targetSection);
                updateActiveNav(link);
            }
        });
    });

    // Handle dropdown functionality
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        dropdown.addEventListener('mouseenter', () => {
            dropdownMenu.style.display = 'block';
        });
        
        dropdown.addEventListener('mouseleave', () => {
            dropdownMenu.style.display = 'none';
        });
    });

    // Show specific section
    function showSection(sectionName) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Initialize map if maps section is shown
        if (sectionName === 'maps') {
            setTimeout(() => {
                if (window.map) {
                    window.map.invalidateSize();
                }
            }, 100);
        }

        // Initialize gallery if gallery section is shown
        if (sectionName === 'gallery') {
            initializeGallery();
        }
    }

    // Update active navigation state
    function updateActiveNav(activeLink) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link or its parent nav-link
        if (activeLink.classList.contains('nav-link')) {
            activeLink.classList.add('active');
        } else if (activeLink.closest('.dropdown')) {
            activeLink.closest('.dropdown').querySelector('.nav-link').classList.add('active');
        }
    }

    // Initialize photo gallery
    function initializeGallery() {
        const photoGrid = document.getElementById('photo-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        if (!photoGrid.hasChildNodes() || photoGrid.children.length === 0) {
            loadGalleryPhotos();
        }

        // Handle filter buttons
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active filter button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter photos
                const filter = btn.getAttribute('data-filter');
                filterPhotos(filter);
            });
        });
    }

    // Load gallery photos
    function loadGalleryPhotos() {
        const photoGrid = document.getElementById('photo-grid');
        const photos = [
            {
                src: 'images/Bob Portrait.jpg',
                alt: 'Captain Robert Bartlett Portrait',
                category: 'portraits',
                title: 'Captain Robert Bartlett',
                description: 'Official military portrait'
            },
            {
                src: 'images/in-uniform.jpeg',
                alt: 'Robert Bartlett in uniform',
                category: 'portraits',
                title: 'In Uniform',
                description: 'Early service photograph, 1943'
            },
            {
                src: 'images/walking-on-base.jpeg',
                alt: 'Walking on military base',
                category: 'locations',
                title: 'Camp Perry',
                description: 'Basic training at Camp Perry, Ohio'
            },
            {
                src: 'images/Colorado-1.jpg',
                alt: 'Camp Carson, Colorado',
                category: 'locations',
                title: 'Camp Carson',
                description: 'Training in Colorado, 1944'
            },
            {
                src: 'images/cherbourg.jpg',
                alt: 'Cherbourg, France',
                category: 'locations',
                title: 'Cherbourg Landing',
                description: 'Arrival in France, September 1944'
            },
            {
                src: 'images/holland-first-battle.jpg',
                alt: 'First battle in Holland',
                category: 'locations',
                title: 'Combat in Holland',
                description: 'First combat operations, 1944'
            },
            {
                src: 'images/Silver-Star-1944-11-28.jpg',
                alt: 'Silver Star citation',
                category: 'documents',
                title: 'Silver Star Citation',
                description: 'Award for gallantry in action, November 1944'
            },
            {
                src: 'images/1944-11-03-Purple-Heart.jpeg',
                alt: 'First Purple Heart',
                category: 'documents',
                title: 'First Purple Heart',
                description: 'Wounded in action, November 1944'
            },
            {
                src: 'images/Lt Bartlett handshake with Russian General v2.jpeg',
                alt: 'Meeting Russian forces',
                category: 'portraits',
                title: 'Historic Meeting',
                description: 'Meeting Russian forces at the Elbe River, April 1945'
            },
            {
                src: 'images/Timberwolf Parade 1945.jpg',
                alt: 'Victory parade',
                category: 'locations',
                title: 'Victory Celebration',
                description: '104th Timberwolf Division parade, 1945'
            }
        ];

        photos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = `photo-item ${photo.category}`;
            photoItem.innerHTML = `
                <div class="photo-container">
                    <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
                    <div class="photo-overlay">
                        <h4>${photo.title}</h4>
                        <p>${photo.description}</p>
                    </div>
                </div>
            `;
            
            // Add click handler to open modal
            photoItem.addEventListener('click', () => {
                openPhotoModal(photo);
            });
            
            photoGrid.appendChild(photoItem);
        });
    }

    // Filter photos by category
    function filterPhotos(filter) {
        const photoItems = document.querySelectorAll('.photo-item');
        
        photoItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    // Open photo modal (reuse existing modal functionality)
    function openPhotoModal(photo) {
        const modal = document.getElementById('image-modal-overlay');
        const modalImage = document.getElementById('modal-image');
        
        modalImage.src = photo.src;
        modalImage.alt = photo.alt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Podcast functionality
    const playBtn = document.getElementById('play-btn');
    const audioPlayer = document.getElementById('audio-player');
    
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (audioPlayer.style.display === 'none') {
                audioPlayer.style.display = 'block';
                playBtn.textContent = '⏸ Pause Episode';
                // In a real implementation, you would load and play the actual audio file
                alert('Podcast functionality would be implemented here with actual audio files.');
            } else {
                audioPlayer.style.display = 'none';
                playBtn.textContent = '▶ Play Episode';
            }
        });
    }

    // Initialize with home section
    showSection('home');
});