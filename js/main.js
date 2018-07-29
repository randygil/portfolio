var myLocation = {};
$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
 console.log(data);
 myLocation.IP = data.geobytesremoteip;
 myLocation.city = data.geobytescity;
 myLocation.country = data.geobytescountry;
 //console.log(JSON.stringify(data, null, 2));
});

var db = firebase.database();
var misCabeceras = new Headers();
var currentdate = new Date(); 
var datetime = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
var ref = db.ref("portfolio");
var usersRef = ref.child("visits");
user = usersRef.set({
 myLocation
});
console.log(db)
/*misCabeceras.append('Accept', 'application/json');
misCabeceras.append('Content-Type', 'application/json');
misCabeceras.append('Access-Control-Allow-Origin', 'http://localhost');

var miInit = { method: 'GET',
               headers: misCabeceras,
               mode: 'cors',
               cache: 'default' };

fetch('http://gd.geobytes.com/GetCityDetails?callback=?',miInit)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
});
*/
