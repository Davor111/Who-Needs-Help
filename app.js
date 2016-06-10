angular.module('WhoHelp', ['ngMap'])


.controller('MyCtrl', function(NgMap) {

 var vm = this;
 vm.types = "['address']";
 vm.positions = [];

  vm.placeChanged = function() {
    vm.place = this.getPlace();
    console.log('location', vm.place.geometry.location);

    vm.map.setCenter(vm.place.geometry.location);
    vm.positions = [vm.place.geometry.location.lat(), vm.place.geometry.location.lng()];
  }

  NgMap.getMap().then(function(map) {
    vm.map = map;
  });

 });
