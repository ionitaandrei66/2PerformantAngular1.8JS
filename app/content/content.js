'use strict';

angular.module('myApp.content', []).component('content', {
    templateUrl: 'content/content.html',
    controller: 'contentCtrl'
}).controller('contentCtrl', ($scope, $http) => {
    $scope.user = {};
    $scope.loggedin = false;
    $scope.time= new Date();
    $scope.login = () => {
        $http({
            method: "POST",
            url: "http://localhost:3000/2performant/login",
            data: {
                email:  $scope.user.email,
                password: $scope.user.password
            }
        }).then((response) => {
            $scope.user = response.data.user;
            $scope.loggedin = true;
        }, (error) => {

        });
    };
    $scope.logout = () => {
        $scope.loggedin = false;
    };
});
