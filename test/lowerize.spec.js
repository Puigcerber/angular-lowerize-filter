'use strict';

describe('Filter: lowerize', function () {

  beforeEach(module('puigcerber.lowerize'));

  var lowerize;
  beforeEach(inject(function ($filter) {
    lowerize = $filter('lowerize');
  }));

  it('should transform string to lower case', function () {
    expect(lowerize('FIREBASE')).toBe('firebase');
    expect(lowerize('AngularJS')).toBe('angularjs');
  });

  it('should replace non-alphanumeric characters', function () {
    expect(lowerize('alpha numeric')).toBe('alphanumeric');
    expect(lowerize('$$internal')).toBe('internal');
    expect(lowerize('Firebase.io')).toBe('firebaseio');
    expect(lowerize('^non_sense-key/')).toBe('nonsensekey');
  });

});
