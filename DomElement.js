class DomElement {
    constructor(selector) {
        this.showPhotos = this.showPhotos.bind(this);
        this.searchContainer = document.getElementById(selector);
    }

    createElement (el, parameter) {
       var element = document.createElement(el);
        if(typeof parameter === 'object') {
            Object.keys(parameter).forEach(function (value) {
                element[value] =  parameter[value];
            })
        }
        return element
    }
    
    urlFormater(photo, size) {
        return 'https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_'+size+'.jpg'
    }
    
    showPhotos (photos) {
        console.log(this.searchContainer);
        var _this = this;
        var photoArray = JSON.parse(photos);
        var block = this.searchContainer.querySelector('#search-results');
        block.innerHTML = '';
        photoArray.photos.photo.forEach(function(photo) {
            var div = _this.createElement("div", {className: 'col-md-2 col-sm-3 col-xs-4'});
            var img = _this.createElement("img", {src: _this.urlFormater(photo,'q'), 'data-photo': _this.urlFormater(photo,'c')});
            var checkbox = _this.createElement("input", {type: 'checkbox', id: 'img'+photo.id});
            var label = _this.createElement("label", {htmlFor: checkbox.id});
            label.appendChild(img);
            div.appendChild(checkbox);
            div.appendChild(label);
            block.appendChild(div);
        })
    }  
    
    imgCollector () {
        var checkedPhotos = this.searchContainer.querySelectorAll('input[type=checkbox]:checked');
        var photos = [];
        for(var i = 0; i < checkedPhotos.length; i++) {
            photos.push(checkedPhotos[i].nextElementSibling.childNodes[0]['data-photo']);
        }
        return photos
    }
}