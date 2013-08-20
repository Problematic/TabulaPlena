'use strict';

angular.module('TabulaPlenaApp')
  .directive('editor', function () {
    return {
      templateUrl: 'views/editor.html',
      replace: true,
      restrict: 'EA',
      scope: true,
      controller: function editorController ($scope, $sce) {
        $scope.content = function () {
          return $sce.trustAsHtml($scope.writeup.content);
        };
      },
      link: function postLink(scope, element, attrs) {

        new Medium({
          element: element.children('.editor-title')[0],
          mode: 'inline',
        });

        new Medium({
          autofocus: true,
          element: element.children('.editor-content')[0],
          mode: 'rich'
        });
      }
    };
  });
