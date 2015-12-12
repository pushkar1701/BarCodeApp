angular.module('BarCodeScanner.services', [])

.factory('Scan', function($scope) {
  // Might use a resource here that returns a JSON array

  $scope.scan = function(){
    alert("Scan Called");
    /*cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );*/
  }

});
