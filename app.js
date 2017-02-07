
class FlickrApi {
    constructor(_appkey) {
        this.appkey = _appkey;
    }
    searchPhotos(text) {
        var flickr = this;
        return new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.photos.search&text=' + text + '&api_key=' + flickr.appkey + '&per_page=20&format=json&nojsoncallback=1', false);
            request.send();
            if (request.status != 200) {
                reject(request.status + ': ' + request.statusText);
            } else {
                resolve(request.responseText);
            }
        });
    }
}

function showPhotos(photos) {
    var a = JSON.parse(photos);
    var block = document.getElementById('gallery');
    block.innerHTML = '';
    a.photos.photo.forEach(function(photo) {
        var div = document.createElement("div");
        div.className = 'col-md-2 col-sm-3 col-xs-4';
        var url = 'https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_q.jpg';
        var img = document.createElement("img");
        img.src = url;
        var checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.id = 'img'+photo.id;
        var label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.appendChild(img);
        div.appendChild(checkbox);
        div.appendChild(label);
        block.appendChild(div);

    })
}
var api = new FlickrApi('b54580f369a7eeebecb2004dc429d08f');

function searchMethods () {
    var value = document.getElementById('search-input').value;
    if (typeof value != 'undefined' && value != '') {
        api.searchPhotos(value)
            .then(
                showPhotos,
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

});



