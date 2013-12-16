(function(){
  angular.module('ftComplete', [])
    .directive('complete', ['$parse', function($parse) {
      return {
        link: function(scope, el, attrs) {
          var options = $parse(attrs.complete)() || {};

          options.source = scope.suggestions;

          scope.complete = $(el).complete(options);

          scope.complete.on('select', function(event, value){
            if(!value) return;
            scope.$apply(function(){
              scope[attrs.ngModel] = value;
            }); 
          });
        }
      };
    }]);
}());