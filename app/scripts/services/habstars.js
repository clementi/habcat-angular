'use strict';

/**
 * @ngdoc service
 * @name habcatAngularApp.Habstars
 * @description
 * # Habstars
 * Factory in the habcatAngularApp.
 */
angular.module('habcatAngularApp')
  .factory('Habstars', function ($http) {
    // Public API here
    return {
      get: function () {
        return $http.get('https://habcat-api-twisted.herokuapp.com/');
      }
    };
  });
