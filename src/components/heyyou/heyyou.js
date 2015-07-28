angular.module('heyyou', ['ui.router']);

angular.module('heyyou').provider('HeyyouRouting', function HeyyouRoutingProvider($stateProvider){
    angular.extend(this, {
        $get: $get,
        config_routes: config_routes,
    });

    function $get(){
        function HeyyouRouteManager(base_state){
            this.prefix = base_state ? base_state + '.' : '';
        }

        angular.extend(HeyyouRouteManager.prototype, {
            get_state: get_state,
        });

        function get_state(s){
            return this.prefix + s;
        }

        return {
            create_route_manager: function(base_state){
                return new HeyyouRouteManager(base_state);
            }
        };
    }

    function config_routes(base_state){
        var prefix = base_state ? base_state + '.' : '';
        $stateProvider.state(prefix+'hey', {
            url: '/hey',
            template: '<heyyou base-state="'+base_state+'"></heyyou>'
        })
        .state(prefix+'goodday', {
            url: '/goodday',
            template: '<goodday base-state="'+base_state+'"></goodday>'
        });
    }

});

angular.module('heyyou').directive('heyyou', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            baseState: '@',
        },
        templateUrl: FS.BASE_URL+'components/heyyou/heyyou.html',
        controller: function($scope, HeyyouRouting){
            $scope.routes = HeyyouRouting.create_route_manager($scope.baseState);
        }
    };
});

angular.module('heyyou').directive('goodday', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            baseState: '@',
        },
        templateUrl: FS.BASE_URL+'components/heyyou/goodday.html',
        controller: function($scope){
        }
    };
});
