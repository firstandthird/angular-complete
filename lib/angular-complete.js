(function(){
  angular.module('ftComplete', [])
    .directive('complete', ['$parse', function($parse) {
      return {
        scope: {
          selectedItem: '=',
          source: '=',
          sourceKey: '=',
          allowOthers: '=',
          query: '&',
          formatSuggestion: '&'
        },
        link: function(scope, el, attrs) {
          var options = $parse(attrs.complete)() || {};

          options.source = [];
          options.sourceKey = scope.sourceKey;
          options.allowOthers = scope.allowOthers;

          if (attrs.query) {
            options.query = function(query, callback) {
              return scope.query({ query: query, callback: callback });
            };
          } else {
            options.source = scope.source;
          }

          if (attrs.formatSuggestion) {
            options.formatSuggestion = function(suggestion, value) {
              return scope.formatSuggestion({ suggestion: suggestion, value: value });
            };
          }

          var completeEl = $(el).complete(options);

          completeEl.on('select', function(event, value){
            if (!value) {
              return;
            }

            scope.$apply(function(){
              scope.selectedItem = value;
            });

          });
        }
      };
    }]);
}());
