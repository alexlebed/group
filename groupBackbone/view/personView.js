var PersonView = Backbone.View.extend({				   	 	
	tagName: 'li',
	
	template: _.template(list()),
	
	events: {
			'click .link': 'clicked'
	},
	
	initialize: function () {
	},
	
    render: function () {
		this.$el.html(this.template({collection: this.model.toJSON()}));

		return this;
	},
	
	clicked: function () {
		$('#tabs, #view').html('');
		mediator.publish('ShowTabs', this.model);
		mediator.publish('Preview', this.model.get('name'));
		mediator.publish('Destroy', this.model);
	}


	
	
});