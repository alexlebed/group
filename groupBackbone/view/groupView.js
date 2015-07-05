var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function () {
		this.peopleCollection = new PeopleCollection();
		this.render();
	},
	
	render: function (model) {
		this.peopleCollection.on('add', function (model){
		    var personView = new PersonView({model: model});
			this.$el.append(personView.render().el);		
		}, this);
		
		this.peopleCollection.fetch();
		
		$('#one').html(this.$el);	
		
		return this;
	}
});