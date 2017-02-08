/**
 * Class that works with pop-up gallery
 */
class Gallery {
    /**
     * Constructor
     * @param {string} selector
     */
    constructor (selector) {
        this.photos = [];
        this.index = 0;
        this.gallery = document.getElementById(selector);
        this.selectedPhoto = this.gallery.getElementsByTagName('img')[0];
    }

    /**
     * Method for switching the photos in gallery
     */
    nextPhoto () {
        this.index++;
        if(this.index >= this.photos.length){
            this.index = 0;
        }
        this.selectedPhoto.src = this.photos[this.index];
    }

    /**
     * Method that resets the old photo list and set the new one
     * @param {Array} photos
     */
    refresh (photos) {
        this.photos = photos;
        this.index = 0;
        this.nextPhoto();
    }

    /**
     * Open pop-up gallery
     */
    showGallery () {
        this.gallery.parentNode.style.display = 'flex';
    }

    /**
     * Close pop-up gallery
     */
    hideGallery () {
        this.gallery.parentNode.style.display = 'none';
    }
}