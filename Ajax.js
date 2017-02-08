/**
 * Class for XHR requests
 */
class Ajax {
    /**
     * Method for GET requests
     * @param {string} url
     * @returns {Promise}
     */
    getData (url) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.send();
            if (request.status != 200) {
                reject(request.status + ': ' + request.statusText);
            } else {
                resolve(request.responseText);
            }
        });
    }
}