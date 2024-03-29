var PreView = Backbone.View.extend({
	tagName: 'p',
	template: _.template(preview()),
    events: {
		'click #close': 'close'
	},
	
	initialize: function () {
	},
	
	render: function () {
		this.$el.html(this.template({collection: this.model}));
		$('#view').append(this.$el);
		
		return this;
	},
	
	close: function (model) {
		$('#tabs, #view').html('');

	}
});