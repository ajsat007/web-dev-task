const apiKey = 'af142de430462b508bdafa61665e969a';

// URLs for TMDb API endpoints
const apiUrl = `https://api.themoviedb.org/3`;
const trendingUrl = `${apiUrl}/trending/all/week?api_key=${apiKey}`;
const popularMoviesUrl = `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const streamingContentUrl = `${apiUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`;

// Function to fetch data from TMDb API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to create carousel item
function createCarouselItem(media) {
    const {
        backdrop_path,
        title,
        name,
        overview
    } = media;

    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    carouselItem.innerHTML = `
    <img src="https://image.tmdb.org/t/p/original/${backdrop_path}" class="d-block w-100" alt="${title || name}">
    <div class="carousel-caption d-none d-md-block">
      <h5>${title || name}</h5>
      <p>${overview}</p>
    </div>
  `;

    return carouselItem;
}

// Function to create thumbnail card for movies or shows
function createThumbnailCard(media) {
    const {
        id,
        poster_path,
        title,
        name,
        overview
    } = media;

    const thumbnailCard = document.createElement('div');
    thumbnailCard.classList.add('col-md-4', 'col-lg-3', 'mb-4');

    thumbnailCard.innerHTML = `
    <div class="thumbnail-card">
      <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="card-img-top" alt="${title || name}">
      <div class="card-body">
        <h5 class="card-title">${title || name}</h5>
        <p class="card-text overview">${overview}</p>
        <a href="./Stream/index.html?id=${id}" class="btn btn-danger btn-sm">Watch Now</a>
      </div>
    </div>
  `;

    return thumbnailCard;
}

// Function to display carousel items
async function displayCarousel() {
    try {
        const carouselInner = document.getElementById('carousel-inner');
        const trendingData = await fetchData(trendingUrl);

        trendingData.forEach((media, index) => {
            const carouselItem = createCarouselItem(media);
            if (index === 0) {
                carouselItem.classList.add('active');
            }
            carouselInner.appendChild(carouselItem);
        });
    } catch (error) {
        console.error('Error displaying carousel:', error);
    }
}

// Function to display popular movies
async function displayPopularMovies() {
    try {
        const popularMoviesGrid = document.getElementById('popular-movies-grid');
        const popularMoviesData = await fetchData(popularMoviesUrl);

        popularMoviesData.forEach(media => {
            const thumbnailCard = createThumbnailCard(media);
            popularMoviesGrid.appendChild(thumbnailCard);
        });
    } catch (error) {
        console.error('Error displaying popular movies:', error);
    }
}

// Function to display streaming content (TV shows)
async function displayStreamingContent() {
    try {
        const streamingContentGrid = document.getElementById('streaming-content-grid');
        const streamingContentData = await fetchData(streamingContentUrl);

        streamingContentData.forEach(media => {
            const thumbnailCard = createThumbnailCard(media);
            streamingContentGrid.appendChild(thumbnailCard);
        });
    } catch (error) {
        console.error('Error displaying streaming content:', error);
    }
}

// Function to initialize the page with content
async function initializePage() {
    try {
        await displayCarousel();
        await displayPopularMovies();
        await displayStreamingContent();
    } catch (error) {
        console.error('Error initializing page:', error);
    }
}

// Initialize the page
initializePage();