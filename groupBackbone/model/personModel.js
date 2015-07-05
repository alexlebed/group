var Person  = Backbone.Model.extend({
	defaults: {
		name: 'name',
		lastName: 'lastName',
		passport: 'passport'
	},
	
	urlRoots: '/Ajax'
});
