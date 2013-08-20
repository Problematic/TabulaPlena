'use strict';

angular.module('TabulaPlenaApp')
  .factory('writeupService', function ($q, $rootScope) {
    var createWriteup = function () {
      var deferred = $q.defer(),
        promise = deferred.promise;

      setTimeout(function () {
        $rootScope.$apply(function () {
          deferred.resolve({
            _id: 5,
            title: 'New Writeup',
            content: '<p>Lorem Ipsum Dolor Sit Amet</p>'
          });
        });
      }, 150);

      return promise;
    },
    getWriteup = function (id) {
      var deferred = $q.defer(),
        promise = deferred.promise;

      setTimeout(function () {
        $rootScope.$apply(function () {
          deferred.resolve({
            _id: id,
            title: 'Some foo writeup #' + id,
            content: 'contentlol'
          });
        });
      }, 200);

      return promise;
    };

    return {
      create: function (callback) {
        var promise = createWriteup();
        if (callback) {
          promise.then(callback);
        }
        return promise;
      },
      get: function get (id, callback) {
        var promise = getWriteup(id);
        if (callback) {
          promise.then(callback);
        }
        return promise;
      }
    };
  });
