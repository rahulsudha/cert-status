$(document).ready(function(){


var rootref = firebase.database().ref().child("CertName");
rootref.on("child_added", function(snapshot){

var name = snapshot.child('Name').val();
var valid = snapshot.child('Validity').val();
//var temp = snapshot.val().Name

alert(snapshot.val());

$("#certtable").append("<tr><td>"+ name +"</td><td>"+ valid +"</td></tr>");

});


});
