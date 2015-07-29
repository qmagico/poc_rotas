angular.module('heyyou', ['ui.router']);

angular.module('heyyou').provider('HeyyouRouting', function HeyyouRoutingProvider($stateProvider){
    angular.extend(this, {
        $get: $get,
        // config_routes: config_routes,
        state_tree: state_tree,
    });

    function $get(){
        return 'whatever';
    }

    // function config_routes(base_state){
    //     var prefix = base_state ? base_state + '.' : '';
    //     $stateProvider.state(prefix+'hey', {
    //         url: '/hey',
    //         template: '<heyyou base-state="'+base_state+'"></heyyou>'
    //     })
    //     .state(prefix+'goodday', {
    //         url: '/goodday',
    //         template: '<goodday base-state="'+base_state+'"></goodday>'
    //     });
    // }

    function state_tree(){
        return [
            {name: 'hey', url: '/hey', template: '<heyyou></heyyou>'},
            {name: 'goodday', url: '/goodday', template: '<goodday></goodday>'},
        ];
    }

    return this;
});

angular.module('heyyou').directive('heyyou', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: FS.BASE_URL+'components/heyyou/heyyou.html',
        controller: function($scope){
        }
    };
});

angular.module('heyyou').directive('goodday', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: FS.BASE_URL+'components/heyyou/goodday.html',
        controller: function($scope){
        }
    };
});
