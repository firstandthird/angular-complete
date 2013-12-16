angular.module('example-app', ['ftComplete']);

var MainController = function($scope) {
  $scope.car = '';

  $scope.suggestions = [
    'Acura', 'Audi', 'BMW', 'Cadillac',
    'Chrysler', 'Dodge', 'Ferrari', 'Ford',
    'GMC', 'Honda', 'Hyundai', 'Infiniti',
    'Jeep', 'Kia', 'Lexus', 'Mini',
    'Nissan', 'Porsche', 'Subaru', 'Toyota',
    'Volkswagon', 'Volvo'
  ];

  $scope.$watch('car', function(val) {
    console.log('changed to ' + val);
  });
};
