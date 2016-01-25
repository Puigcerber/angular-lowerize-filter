'use strict';

angular.module('puigcerber.lowerize', [])
  .filter('lowerize', function() {
    return function(input) {
      if (!input) {
        return input;
      }
      return input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    };
});
