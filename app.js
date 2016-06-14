var app = angular.module('WhoHelp', ['ngMap']);


app.controller('MapController', function ($compile, NgMap) {

  var vm = this;
  vm.position = "";

  vm.types = "['address']";;
  vm.markerID = "";


  vm.placeChanged = function () {
    vm.place = this.getPlace();
    console.log('location', vm.place.geometry.location);
    vm.map.setCenter(vm.place.geometry.location);
    vm.position = [vm.place.geometry.location.lat(), vm.place.geometry.location.lng()];
    vm.map.showInfoWindow('addHelp-iw', 'addHelp');
  };


  vm.showDetail = function (e, markID) {
    vm.map.showInfoWindow(e, markID);
  };


  vm.hideDetail = function() {
    vm.map.hideInfoWindow('addHelp-iw');
  };


  vm.showMarkerDetail = function(e, id) {
    vm.markerID = id - 1;
    vm.map.showInfoWindow('showHelp-iw', id);
  };


  vm.removeMarker = function() {
  };


  NgMap.getMap().then(function (map) {
    vm.map = map;
  });



});



app.controller('MarkerController', function ($compile, NgMap) {

  var marker = this; 

   NgMap.getMap().then(function (map) {
    marker.map = map;
  });

  marker.helpData = {}; 
  marker.helpLocations = [

    {
      name: "David",
      description: "We need help with the garden",
      priority: "low", //high, medium, low
      position: ["48.134519", "11.56519"],
      address: "Testaddress, München",
      id: "1"
    },

    {
      name: "Thomas",
      description: "our basement is flooded",
      priority: "medium", //high, medium, low
      position: ["48.1377276", "11.5718083"],
      address: "Testaddress, München",
      id: "2"  // 48.1377276,11.5718083,17z
    },

    {
      name: "John",
      description: "There's an evil goldfish in our pond",
      priority: "high", //high, medium, low
      position: ["48.130273", "11.560228"],
      address: "Testaddress, München",
      id: "3"  
    }

  ];

  marker.addHelp = function(vm) {
    
    marker.helpData.address = vm.place.formatted_address;
    marker.helpData.position = [vm.place.geometry.location.lat(), vm.place.geometry.location.lng()];
    marker.helpData.id = marker.helpLocations.length + 1;
    marker.helpLocations.push(marker.helpData);
    marker.helpData = {};
    marker.map.hideInfoWindow('addHelp-iw');
  };




});

