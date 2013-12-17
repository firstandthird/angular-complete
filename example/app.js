angular.module('example-app', ['ftComplete']);

var MainController = function($scope) {
  $scope.car = '';

  $scope.query = [
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

  $scope.$on('complete:selected', function(e, val) {
    console.log(val);
  });
};
