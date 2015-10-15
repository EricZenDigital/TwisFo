app.config(function($stateProvider) {

  $stateProvider.state('texts', {
    url: '/texts',
    templateUrl: 'js/texts/texts.html',
    controller: 'TextsCtrl'
  });

});

app.controller('TextsCtrl', function($scope, $http) {

  $scope.text = {};
  $scope.messageResult = {};
  $scope.callResult = {};

  $scope.sendText = () => {
    $http.post('/api/texts/sendText', $scope.text).then(function(response) {
      $scope.messageResult = response.data;
      $scope.text = {};
    });
  };

  $scope.sendCall = () => {
    $http.post('/api/texts/sendCall', $scope.text).then(function(response) {
      $scope.callResult = response.data;
    });
  }
});
