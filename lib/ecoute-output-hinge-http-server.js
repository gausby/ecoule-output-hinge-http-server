/* global require console module */
var RestAPI = require('hinge'),
    http = require('http'),
    url = require('url')
;

function Output (config) {
    this.port = config.port || 8080;
    this.contentType = config.contentType || 'text/html';
}


Output.prototype.initialize = function(done) {
    var that = this;

    http.createServer(function(req, response) {
        var request = url.parse(req.url, true);

        if (req.method === 'GET') {
            that.api.GET(request.pathname, request.query, function(err, data) {
                if (err) {
                    data = '<!DOCTYPE html>\n<html><body><h1>404erd</h1></body></html>';
                    response.writeHead(404, {
                        'Content-Length': data.length,
                        'Content-Type': that.contentType
                    });
                }
                else {
                    response.writeHead(200, {
                        'Content-Length': data.length,
                        'Content-Type': that.contentType
                    });
                }

                response.write(data);
                response.end();
            });
        }
    }).listen(this.port);

    done();
}


Output.prototype.execute = function(data, done) {
    this.api = new RestAPI({
        resource: data,
        GET: function (uri, query, done) {
            var response = this[uri.substring(1)];

            if (response && response.length > 0 && typeof response === 'string') {
                 done(null, response);
            }
            else {
                done('404');
            }
        }
    });

    return done();
}


module.exports = function (options) {
    return (new Output(options || {}));
}