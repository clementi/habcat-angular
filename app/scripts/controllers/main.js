'use strict';

/**
 * @ngdoc function
 * @name habcatAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the habcatAngularApp
 */
angular.module('habcatAngularApp')
  .controller('MainCtrl', function ($scope, Habstars) {
    Habstars.get().then(function (response) {
      console.debug(response);
      $scope.habstars = response.data.results;
    });
  });
