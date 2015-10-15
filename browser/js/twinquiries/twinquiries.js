app.config(function($stateProvider) {

  $stateProvider.state('twinquiries', {
    url: '/twinquiries',
    templateUrl: 'js/twinquiries/twinquiries.html',
    controller: 'TwinquiryCtrl'
  });

});

app.controller('TwinquiryCtrl', function($scope, $http) {

  $scope.tw = {};
  $scope.tweets = {};
  $scope.getTweets = () => {
    $http.post('/api/twitter', $scope.tw).then((response)=>{
      response.data.statuses.map((el)=>{
        delete el.metadata;
        delete el.entities;
        return el;
      });
      $scope.tweets = response.data.statuses;
    });
  };

  $scope.sendTweet = () => {
    $http.post('/api/twitter/sendTweet', $scope.sendTw).then((response)=>{
      console.log(response);
    });
  }

  $scope.getUser = () => {
    $http.post('/api/twitter/getUser', $scope.sendTw).then((response)=>{
      console.log(response);
    });
  }

});
