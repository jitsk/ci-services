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

## Logger
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

## Ncrypt
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