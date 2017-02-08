/**
 * Class for Flickr API requests
 */
class FlickrApi {
    /**
     * Constructor
     * @param {string} _appkey
     * @param {Ajax} _ajax
     */
    constructor(_appkey, _ajax) {
        this.appkey = _appkey;
        this.ajax = new _ajax;
    }

    /**
     * Method that sends GET request to Flickr API
     * @param {string} text
     * @returns {Promise}
     */
    searchPhotos(text) {
        return this.ajax.getData('https://api.flickr.com/services/rest/?method=flickr.photos.search&text=' + text + '&api_key=' + this.appkey + '&per_page=18&format=json&nojsoncallback=1');
    }
}