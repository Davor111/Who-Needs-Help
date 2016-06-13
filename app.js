angular.module('WhoHelp', ['ngMap'])


.controller('MapController', function($compile, NgMap) {

 var vm = this;

 vm.types = "['address']";
 vm.positions = [];





 vm.placeChanged = function() {

    vm.place = this.getPlace();
    console.log('location', vm.place.geometry.location);
    vm.map.setCenter(vm.place.geometry.location);
    vm.positions.push({lat: vm.place.geometry.location.lat(), lng: vm.place.geometry.location.lng()});
}


vm.showDetail = function(e, position) {
    vm.map.showInfoWindow('foo-iw', "mapMark");
  };

  NgMap.getMap().then(function(map) {
    vm.map = map;
  });

 });
