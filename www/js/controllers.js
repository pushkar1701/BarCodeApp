angular.module('BarCodeScanner.controllers', [])

.controller('DashCtrl', function($scope) {
  var scanResult = {};
  $scope.scan = function(){
    alert("scan called");
    cordova.plugins.barcodeScanner.scan(
      function (result) {
          $scope.scanResult.text = result.text;
          $scope.scanResult.format = result.format;
          $scope.scanResult.cancelled = result.cancelled;
          alert("We got a barcode\n" +
                "Result: " + $scope.scanResult.text + "\n" +
                "Format: " + $scope.scanResult.format + "\n" +
                "Cancelled: " + $scope.scanResult.cancelled);
          
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
  }

})


