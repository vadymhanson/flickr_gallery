class FlickrApi {
    constructor(_appkey, _ajax) {
        this.appkey = _appkey;
        this.ajax = new _ajax;
    }
    searchPhotos(text) {
        return this.ajax.getData('https://api.flickr.com/services/rest/?method=flickr.photos.search&text=' + text + '&api_key=' + this.appkey + '&per_page=18&format=json&nojsoncallback=1');
    }
    
}