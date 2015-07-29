(function(){
	var deps = [
		'ngMaterial',
		'ui.router',
		'ui.router.stateHelper',
		'fsngutils',
		'fstoolbar',
		'fshome',
		'fslogin',
		'fsissue',
		'fsproject',
		'fslistprojects',
		'fssearch',
		'fssponsor',
		'fsviewuser',
		'fseditprofile',
		'fsapi',
		'heyyou',
	];
	if(FS.USE_TEAMPLE_CACHE){
		deps.push('fstemplates');
	}
	angular.module('fs_main', deps);

	angular.module('fs_main').config(function($interpolateProvider, stateHelperProvider, $urlRouterProvider, HeyyouRoutingProvider) {
	    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');

	    $urlRouterProvider.otherwise('/');

		var listprojects_state = {name: 'listprojects', url: '/project', template: '<fslistprojects></fslistprojects>'};
		var viewuser_state = {name: 'viewuser', url: '/user/:login', template: '<fsviewuser></fsviewuser>', controller: 'ViewUserStateCtrl'};
		listprojects_state.children = HeyyouRoutingProvider.state_tree();
		viewuser_state.children = HeyyouRoutingProvider.state_tree();

		var state_tree = [
			{name: 'home', url: '/', template: '<fshome></fshome>'},
			{name: 'login', url: '/login', template: '<fslogin></fslogin>'},
			{name: 'issue', url: '/issue/:id/:slug', template: '<fsissue></fsissue>', controller: 'IssueStateCtrl'},
			{name: 'project', url: '/project/:id/:slug', template: '<fsproject></fsproject>', controller: 'ProjectStateCtrl'},
			{name: 'search', url: '/search', template: '<fssearch></fssearch>', controller: 'SearchStateCtrl'},
			{name: 'sponsor', url: '/sponsor', template: '<fssponsor></fssponsor>', controller: 'SponsorStateCtrl'},
			{name: 'editprofile', url: '/editprofile', template: '<fseditprofile></fseditprofile>'},
			listprojects_state,
			viewuser_state,
		];

		console.log('ARVORE DE ui-states:');
		console.log(JSON.stringify(state_tree, null, 4));

		for(var i=0; i<state_tree.length; i++){
			stateHelperProvider.state(state_tree[i]);
		}

	    // $stateProvider
	    //     .state('home', {url: '/', template: '<fshome></fshome>'})
	    //     .state('login', {url: '/login', template: '<fslogin></fslogin>'})
	    //     .state('issue', {url: '/issue/:id/:slug', template: '<fsissue></fsissue>', controller: 'IssueStateCtrl'})
	    //     .state('project', {url: '/project/:id/:slug', template: '<fsproject></fsproject>', controller: 'ProjectStateCtrl'})
	    // 	.state('listprojects', {url: '/project', template: '<fslistprojects></fslistprojects>'})
	    // 	.state('search', {url: '/search', template: '<fssearch></fssearch>', controller: 'SearchStateCtrl'})
	    //     .state('sponsor', {url: '/sponsor', template: '<fssponsor></fssponsor>', controller: 'SponsorStateCtrl'})
	    //     .state('viewuser', {url: '/user/:login', template: '<fsviewuser></fsviewuser>', controller: 'ViewUserStateCtrl'})
	    //     .state('editprofile', {url: '/editprofile', template: '<fseditprofile></fseditprofile>'});
		//
		// 	HeyyouRoutingProvider.config_routes('listprojects');
		// 	HeyyouRoutingProvider.config_routes('viewuser');
	});

	angular.module('fs_main').controller('FSMainCtrl', function($scope, FSAuth){
	});
})();
