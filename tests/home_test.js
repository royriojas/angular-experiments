describe('HomeController', function (){
  var scope, WeatherService, $httpBackend;

  beforeEach(module('myApp'));
  beforeEach(inject(function ($rootScope, $controller, $injector) {
    scope = $rootScope.$new();

    WeatherService = $injector.get('WeatherService');

    $httpBackend = $injector.get('$httpBackend');

    $controller('HomeController', {
      $scope : scope,
      WeatherService : WeatherService
    });

  }));

  afterEach(function () {
    $httpBackend.resetExpectations();
  });

  it('has the city of San Francisco set by Default', function () {
    expect(scope.city).toMatch(/San Francisco/);
  });

  it('calls the weather service with the city', function () {
    spyOn(WeatherService, 'getWeatherFor').andCallThrough();

    scope.getWeatherData();

    expect(WeatherService.getWeatherFor).toHaveBeenCalled();
    //$httpBackend.flush();
  });

});