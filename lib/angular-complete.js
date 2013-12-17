(function(){
  angular.module('ftComplete', [])
    .directive('complete', ['$parse', function($parse) {
      return {
        link: function(scope, el, attrs) {
          var options = $parse(attrs.complete)() || {};

          var format = scope.format || function(value) {
            return value;
          };

          options.source = [];
          if(typeof scope.query === 'function') {
            options.query = scope.query;
          } else {
            options.source = scope.query;
          }

          if(typeof scope.formatSuggestion === 'function') {
            options.formatSuggestion = scope.formatSuggestion;
          }

          options.format = format;

          scope.complete = $(el).complete(options);

          scope.complete.on('select', function(event, value){
            if(!value) return;

            scope.$apply(function(){
              scope[attrs.ngModel] = format(value);
            });

            scope.$emit('complete:selected', value);
          });
        }
      };
    }]);
}());