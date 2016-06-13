# CI Services
A collection of API wrappers around the CI Micro Services. It should respect the --env parameter used in the parent app.

## Geocoder
API documentation is [here](https://docs.google.com/document/d/1HYU0-k0JdtyEjuGLFZR-kkR_qfXWUR2RrmkpiH0iWx0/edit).

```
var Services = require('ci-services');
var geocoder = Services.geocoder;

var opts = {
  address1: "66 Tyne Road",
  town: "Redcar",
  county: "cleveland",
  postcode: "TS10 1PZ",
  country: "gb"
}

geocoder("get", "/geocode/address", opts, function(err, data) {

  // do something

})
```

## Image Processor
API documentation is [here](https://docs.google.com/document/d/1H1iNuyHIzBRw42CscIfZJJfxOszWLEm3lIYUpIjCqSE/edit).

```
var Services = require('ci-services');
var image_processor = Services.image_processor;
var fs = require('fs');
var image = fs.readFileSync('/path/to/image/hello.jpg');

var opts = {
  filedata: image,
  max_size: "666"
}

image_processor("post", "/image/resize", opts, function(err, data) {

  // do something

})
```

## Logger
API documentation is [here](https://docs.google.com/document/d/1Jp8fGAa9luQ1txyyOOPe92MF-mQ6z0TZv2Xu73eWyMk/edit).

```
var Services = require('ci-services');
var logger = Services.logger;

logger("post", "/geocode/address", { data: queue_item, error: api_err }, function(err, data) {

  // do something

})
```

## Ncrypt
API documentation is [here](https://docs.google.com/document/d/1i4PM1tkawsRE4ngCzFTABjLppwbDo0zhtAe6FKFcRHQ/edit).

```
var Services = require('ci-services');
var ncrypt = Services.ncrypt;

var opts = {
  string_to_encrypt: "66 Tyne Road",
  encryption_reference: "Redcar"
}

geocoder("get", "/encrypt", opts, function(err, data) {

  // do something

})
```