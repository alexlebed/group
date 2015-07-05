var AddView = Backbone.View.extend({
	el: '#forma',
	
	events: {
	    'submit': 'submit'	
	},
	
	initialize: function () {
		//console.log(this.el.innerHTML);
	},
	
	submit: function (e) {
		e.preventDefault();
		var input = $(e.currentTarget).find('#first').val() || 'without name';
		var second = $(e.currentTarget).find('#second').val() || 'without last name';
		var third = $(e.currentTarget).find('#third').val() || 'without passport';
		var newMan = new Person({name: input, lastName: second, passport: third});
		peopleCollection.add(newMan)
		console.log(newMan);
	}
})