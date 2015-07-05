var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function () {
		peopleCollection = new PeopleCollection();
		this.render();
	},
	
	render: function (model) {
		peopleCollection.on('add', function (model){
		    var personView = new PersonView({model: model});
			this.$el.append(personView.render().el);		
		}, this);
		
		peopleCollection.fetch();
		
		$('#one').html(this.$el);	
		
		return this;
	}
});