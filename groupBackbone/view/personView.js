var PersonView = Backbone.View.extend({				   	 	
	tagName: 'li',
	
	template: _.template(list()),
	
	initialize: function () {
	},
	
	events: {
			'click .link': 'clicked'
	},
	
	clicked: function () {
		$('#tabs, #view').html('');
		mediator.publish('ShowTabs', this.model);
		mediator.publish('Preview', this.model.get('name'));
	},
	
	render: function () {
		this.$el.html(this.template({collection: this.model.toJSON()}));

		return this;
	}
});