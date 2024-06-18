document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'af142de430462b508bdafa61665e969a';
    const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
    const videoPlayer = document.getElementById('video-player');

    async function fetchStreamingContent() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const media = data.results[0]; // Assuming the first result is the currently streaming content
                const videoElement = createVideoPlayer(media);
                videoPlayer.appendChild(videoElement);
            } else {
                console.error("No streaming content available.");
            }
        } catch (error) {
            console.error("Error fetching streaming content:", error);
        }
    }

    function createVideoPlayer(media) {
        const {
            title,
            name,
            backdrop_path,
            overview,
            genre_ids,
            release_date,
            vote_average
        } = media;

        const videoElement = document.createElement('video');
        videoElement.src = `https://example.com/streaming-service/${media.id}/video`; // Replace with actual streaming service URL
        videoElement.controls = true;

        const videoTitle = document.createElement('h3');
        videoTitle.textContent = title || name;

        const videoDetails = document.createElement('div');
        videoDetails.classList.add('video-details');
        videoDetails.innerHTML = `
      <p>${overview}</p>
      <p><strong>Genres:</strong> ${getGenres(genre_ids)}</p>
      <p><strong>Rating:</strong> ${vote_average}</p>
      <p><strong>Release Date:</strong> ${formatDate(release_date)}</p>
    `;

        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-item');
        videoContainer.appendChild(videoElement);
        videoContainer.appendChild(videoTitle);
        videoContainer.appendChild(videoDetails);

        return videoContainer;
    }

    function getGenres(genreIds) {
        // Placeholder function to fetch genre names based on genreIds
        return "Action, Adventure"; // Example placeholder
    }

    function formatDate(dateString) {
        // Placeholder function to format release date
        return "2024-06-18"; // Example placeholder
    }

    fetchStreamingContent();
});