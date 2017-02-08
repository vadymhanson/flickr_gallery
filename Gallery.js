class Gallery {
    constructor (selector) {
        this.photos = [];
        this.index = 0;
        this.gallery = document.getElementById(selector);
        this.selectedPhoto = this.gallery.getElementsByTagName('img')[0];
    }
    
    nextPhoto () {
        this.index++;
        if(this.index >= this.photos.length){
            this.index = 0
        }
        this.selectedPhoto.src = this.photos[this.index];
    }

    refresh (photos) {
        this.photos = photos;
        this.index = 0;
        this.nextPhoto();
    }
    
    showGallery () {
        this.gallery.parentNode.style.display = 'flex';
    }
    
    hideGallery () {
        this.gallery.parentNode.style.display = 'none';
    }
}