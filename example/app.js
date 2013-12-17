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

  $scope.query = function(query, callback){
    var queryLower = query.toLowerCase(), self = this;

    var suggestions = [];

    for(var car in cars) {
      car = cars[car];

      if(car.name.toLowerCase().indexOf(queryLower) !== -1) suggestions.push(car);
    }

    callback.apply(this,[suggestions]);
  };

  $scope.formatSuggestion = function(suggestion, value) {
    var pattern = '(' + value + ')';
    return suggestion.name.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
  };

  $scope.format = function(value) {
    if(!value) return value;
    return value.name;
  };

  $scope.$on('complete:selected', function(e, val) {
    console.log('Changed to: ' + val.name, val);
  });
};
