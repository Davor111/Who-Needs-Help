angular.module('WhoHelp', ['ngMap'])


  .controller('MapController', function ($compile, NgMap) {

    var vm = this;

    vm.position = "";

    vm.types = "['address']";;
    vm.markID = "test"

   vm.helpLocations = [
      {
        name: "David",
        description: "We need help with the garden",
        priority: "high", //high, medium, low
        position: ["48.134519", "11.56519"]
      }
    ];


    vm.placeChanged = function () {

      vm.place = this.getPlace();
      console.log('location', vm.place.geometry.location);
      vm.map.setCenter(vm.place.geometry.location);
      vm.position = [vm.place.geometry.location.lat(), vm.place.geometry.location.lng()];
      vm.map.showInfoWindow('addHelp-iw', 'addHelp');
    }


    vm.showDetail = function (e, markID) {
      vm.map.showInfoWindow(e, markID);
    };

    NgMap.getMap().then(function (map) {
      vm.map = map;
    });

  })

 .controller('MarkerController', [], function () {



  })
