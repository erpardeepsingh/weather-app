const request = require('request');
const _=require('lodash');
const yargs=require('yargs');
var t=yargs.argv;
var arg=t._[0];
var lat,lon;
request({
  url:"https://us1.locationiq.com/v1/search.php?key=9e9e156011ce69&q="+arg+"&format=json",
  json: true
}, (error, response, body) => {
  console.log('Latitude:',body[0].lat);
  lat=body[0].lat;
  console.log('Longitude:',body[0].lon);
  lon=body[0].lon;
  console.log('Address:',body[0].display_name);
  request({
    url:"https://api.darksky.net/forecast/a4cacffa63c0a95cf0718424513ffaf7/"+lat+","+lon,
    json: true
  }, (error, response, body) => {
    console.log("Weather Condition: ",body.currently.summary);
    console.log("Temperature: ",body.currently.temperature,"F");
  });
});

