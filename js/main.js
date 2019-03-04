
  //var Firebase = require('firebase'),
  //Database = new Firebase('https://sendgrowth-counter.firebaseio.com/'),
/*
  var Database = firebase.database(),
  pageURL = document.URL.split('.').join('_'),
  pageURL = pageURL.split('/').join('*'),
  domain = window.location.host,
  rootRef = null,
  pagePref='one',    
   labelPref,
  locPref,
  choice,
  scripts = document.getElementsByTagName('script'),
  scriptLoc;

  for(var i = 0, l = scripts.length; i < l; i++){
    if(scripts[i].id === 'counter'){
      pagePref = scripts[i].getAttribute('page');
      labelPref = scripts[i].getAttribute('label');
      locPref = scripts[i].getAttribute('loc');               
      break;
    };
  };

  if(pagePref=='one'){
    rootRef = Database.child(pageURL.split('.').join('_'));
  }else{
    rootRef = Database.child(domain.split('.').join('_'));
  };

  rootRef.transaction(function(currentData) {
    if (currentData === null) {
      var obj = {total: 1 };
      obj[pageURL] = {total: 1};
      return obj;
    } else {        
      if (currentData[pageURL] === null){
        var obj = { total: currentData.total+1 };
        obj[pageURL] = {total: 1};
        return obj
      }else{
        var obj = {total: currentData.total+1 };
        obj[pageURL] = {total: currentData[pageURL].total+1};
        return obj
      };    
    }
  }, function(error, committed, snapshot) {
    if (error) {
      return false;
    } else if (!committed) {
      return false;
    }   
    insert_counter(snapshot);   
  }); 

  function insert_counter(snapshot){
    choice=choice.toLocaleString();
    if(pagePref==='all'){ choice = snapshot.val().total };    
    if(pagePref==='one'){ choice = snapshot.val()[pageURL].total };   
    var element = document.createElement('div'), css;
    css = 'padding:5px;margin:5px;z-index: 99999;background: lightblue; text-align:center;';
    if(locPref==='float'){ css = css+'position:fixed;bottom: 0;left: 0;' };
    element.style.cssText = css;
    element.innerHTML = labelPref+' <b>'+choice+'</b>';
    var location = document.getElementById('counter');
    location.parentNode.insertBefore(element, location);
    rootRef.on('value', function(dataSnapshot) {
      if(pagePref==='all'){ choice = dataSnapshot.val().total };      
      if(pagePref==='one'){ choice = dataSnapshot.val()[pageURL].total };     
      element.innerHTML = labelPref+' <b>'+choice+'</b>';
    });
  };







/*var myLocation = {};
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
