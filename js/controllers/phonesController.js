questApp.controller('phoneController', 
function($scope, $http) {
    $http({method: 'GET', url: 'list.json'}).
            then(function success(response) {
                $scope.phones=response.data.phones;
        });
  
});