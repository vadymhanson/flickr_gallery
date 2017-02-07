class Ajax {
    getData (url) {
        return new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
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