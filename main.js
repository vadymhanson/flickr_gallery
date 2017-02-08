const config = {
    appkey: 'b54580f369a7eeebecb2004dc429d08f'
};
const flickrApi = new FlickrApi(config.appkey, Ajax);
const searchContainer = new SearchContainer('search-container');
const gallery = new Gallery('gallery');
/**
 * Method that starts the search
 */
function searchMethods () {
    let value = document.getElementById('search-input').value;
    if (value) {
        flickrApi.searchPhotos(value)
            .then(
                searchContainer.showPhotos,
                error => console.log(`Rejected: ${error}`)
            );
    }
}

/**
 * Event that starts search on button click
 */
document.getElementById('search-photo').addEventListener('click', () => searchMethods());

/**
 * Event that starts search on Enter keypress
 */
document.getElementById('search-input').addEventListener('keypress', event => {
    if (event.keyCode === 13){
        searchMethods();
    }
});

/**
 * Event that opens gallery after click on button
 */
document.getElementById('gallery-button').addEventListener('click', () => {
    let photos = searchContainer.imgCollector();
    if(photos.length){
        gallery.refresh(photos);
        gallery.showGallery();
    }
});

/**
 * Event that hide gallery on click in free of pop-up area
 */
document.getElementsByClassName('overlay')[0].addEventListener('click', event => {
    if (event.target.className === 'overlay') {
        gallery.hideGallery();
    }
});

/**
 * Event that switch photo to next after click on it
 */
document.getElementById('gallery').addEventListener('click', () => gallery.nextPhoto());