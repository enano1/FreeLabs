document.addEventListener('DOMContentLoaded', function () {
    // Wikipedia API URL for Bubble Sort
    const apiUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts|pageimages&titles=Bubble_sort&exintro=1&origin=*';

    // Function to fetch data from the Wikipedia API
    function fetchData(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function to update the content of the page
    function updateContent(data) {
        const page = Object.values(data.query.pages)[0];
        const contentDiv = document.getElementById('content');
        const visualDiv = document.getElementById('visual');

        // Display the extract (summary) from Wikipedia
        if (page.extract) {
            contentDiv.innerHTML = `<p>${page.extract}</p>`;
        } else {
            contentDiv.innerHTML = '<p>No information available.</p>';
        }

        // Display images related to Bubble Sort
        if (page.pageimage) {
            const imageUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&titles=${page.pageimage}&iiprop=url&origin=*`;

            fetchData(imageUrl, function (imageData) {
                const imagePage = Object.values(imageData.query.pages)[0];
                if (imagePage.imageinfo && imagePage.imageinfo[0].url) {
                    const image = document.createElement('img');
                    image.src = imagePage.imageinfo[0].url;
                    visualDiv.appendChild(image);
                }
            });
        }
    }

    // Fetch data and update the content
    fetchData(apiUrl, updateContent);

    // YouTube API for the most watched video about Bubble Sort
    const videoContainer = document.getElementById('video-container');
    const videoId = 'your_youtube_video_id'; // Replace with the actual YouTube video ID

    if (videoId) {
        const iframe = document.getElementById('video');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
        videoContainer.innerHTML = '<p>No YouTube video available.</p>';
    }
});
