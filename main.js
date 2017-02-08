const config = {
    appkey: 'b54580f369a7eeebecb2004dc429d08f'
    
};

var flickrApi = new FlickrApi(config.appkey, Ajax);
var domElement = new DomElement('search-container');
var gallery = new Gallery('gallery');

function searchMethods () {
    var value = document.getElementById('search-input').value;
    if (typeof value != 'undefined' && value != '') {
        flickrApi.searchPhotos(value)
            .then(
                domElement.showPhotos,
                error => console.log(`Rejected: ${error}`)
            );
    }
}

document.getElementById('search-photo').addEventListener('click', function() {
    searchMethods()
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.keyCode == 13){
        searchMethods()
    }
});

document.getElementById('gallery-button').addEventListener('click', function() {
    var photos = domElement.imgCollector();
    gallery.refresh(photos);
    gallery.showGallery();
});

document.getElementsByClassName('overlay')[0].addEventListener('click', function(e) {
    if (e.target.className === 'overlay') {
        gallery.hideGallery()
    }
});

document.getElementById('gallery').addEventListener('click', function() {
    gallery.nextPhoto();
});