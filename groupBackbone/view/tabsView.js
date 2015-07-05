var TabsView = Backbone.View.extend({
	template: _.template(button()),
	
	events: {
		'click button': 'clicked',
		'click #close': 'close'
	},
	
	clicked: function (e) {
		var clickedButton = $(e.target).text(),
			thisClickedButton = {},
			studentTabs;
			
		$('#view').html('');

		if(clickedButton === 'all'){
			this.model.unset("all", { silent: true });	
			mediator.publish('Preview', this.model.toJSON()); 
		} else {
			thisClickedButton.name = this.model.get(clickedButton);
			mediator.publish('Preview', thisClickedButton);
		}
	},
	

	
	initialize: function () {
	},
	
	render: function () {
		this.model.set({
			 all: 'all'
		});

		studentTabs = this.model.toJSON();
		this.$el.html(this.template({collection: studentTabs}));
		
		$('#tabs').append(this.$el);
		
		return this;
	}
});
