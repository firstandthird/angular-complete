angular.module('example-app', ['ftComplete']);

var MainController = function($scope) {
  $scope.car = '';

  var cars = [
    {
      name: 'Acura'
    }, {
      name: 'Audi'
    }, {
      name: 'BMW'
    }, {
      name: 'Cadillac'
    }, {
      name: 'Chrysler'
    }, {
      name: 'Dodge'
    }, {
      name: 'Ferrari'
    }, { 
      name: 'Ford' 
    }, {
      name: 'GMC' 
    }, { 
      name: 'Honda'
    }, {
      name: 'Hyundai'
    }, {
      name: 'Infiniti'
    }, {
      name: 'Jeep' 
    }, {
      name: 'Kia'
    }, {
      name: 'Lexus' 
    }, {
      name: 'Mini'
    }, {
      name: 'Nissan' 
    }, {
      name: 'Porsche'
    }, {
      name: 'Subaru'
    }, {
      name: 'Toyota'
    }, {
      name: 'Volkswagon'
    }, {
      name: 'Volvo'
    }
  ];

  $scope.carsPlain = [];
  cars.forEach(function(car) {
    $scope.carsPlain.push(car.name);
  });

  $scope.searchCars = function(query, callback){
    console.log('search', arguments);
    var queryLower = query.toLowerCase();

    var suggestions = [];

    for(var car in cars) {
      car = cars[car];

      if (car.name.toLowerCase().indexOf(queryLower) !== -1) {
        suggestions.push(car);
      }
    }

    callback.apply(this,[suggestions]);
  };

  $scope.formatCar = function(suggestion, value) {
    var pattern = '(' + value + ')';
    return '* ' + suggestion.name.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>') + ' *'
  };

  $scope.$watch('car', function(val, old) {
    if (val !== old) {
      console.log('Car changed', val);
    }
  });

};

angular.module('example-app').controller('MainController', MainController);