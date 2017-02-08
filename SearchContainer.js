/**
 * Class that works with search page
 */
class SearchContainer {
    /**
     * Constructor
     * @param {string} selector
     */
    constructor(selector) {
        this.showPhotos = this.showPhotos.bind(this);
        this.searchContainer = document.getElementById(selector);
    }

    /**
     * Method that creates DOM element
     * @param {string} el
     * @param {Object} parameter
     * @returns {Element}
     */
    createElement (el, parameter) {
        let element = document.createElement(el);
        if (typeof parameter === 'object') {
            Object.keys(parameter).forEach(value => {
                element[value] =  parameter[value];
            });
        }
        return element;
    }

    /**
     * Method that creates right format of URL for image
     * @param {Object} photo
     * @param {string} size
     * @returns {string}
     */
    urlFormater(photo, size) {
        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
    }

    /**
     * Method that creates a picture gallery after search
     * @param {JSON} photos
     */
    showPhotos (photos) {
        let _this = this;
        let photoArray = JSON.parse(photos);
        let block = this.searchContainer.querySelector('#search-results');
        block.innerHTML = '';
        photoArray.photos.photo.forEach( photo => {
            let div = _this.createElement("div", {
                className: 'col-md-2 col-sm-3 col-xs-4'
            });
            let img = _this.createElement("img", {
                src: _this.urlFormater(photo,'q'),
                'data-photo': _this.urlFormater(photo,'c')
            });
            let checkbox = _this.createElement("input", {
                type: 'checkbox',
                id: 'img'+photo.id
            });
            let label = _this.createElement("label", {
                htmlFor: checkbox.id
            });
            label.appendChild(img);
            div.appendChild(checkbox);
            div.appendChild(label);
            block.appendChild(div);
        })
    }

    /**
     * Method that take all checked photos and create a new Array of them
     * @returns {Array}
     */
    imgCollector () {
        let checkedPhotos = this.searchContainer.querySelectorAll('input[type=checkbox]:checked');
        let photos = [];
        for (let i = 0; i < checkedPhotos.length; i++) {
            photos.push(checkedPhotos[i].nextElementSibling.childNodes[0]['data-photo']);
        }
        return photos;
    }
}