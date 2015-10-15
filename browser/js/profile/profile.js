app.config(function($stateProvider) {

  $stateProvider.state('profile', {
    url: '/profile',
    templateUrl: 'js/profile/profile.html',
    controller: 'ProfileCtrl'
  });

});

app.controller('ProfileCtrl', function($scope, AuthService, $http) {

  if (!$scope.user) {
    $scope.user = {};

    AuthService.getLoggedInUser().then((result)=> {
      Object.assign($scope.user, result);
    });
  }

  $scope.updateUser = function(){
    console.log($scope.user);
    alert('Information Updated!');
    //$http.put()
  };
});
