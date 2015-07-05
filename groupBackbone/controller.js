function Controller () {
	'use strict';
	var view;
	
	this.start = function (group) {
		mediator.subscribe('ShowTabs', tabs);
		mediator.subscribe('Preview', preview);
		view = new PeopleView ();
	};

	function tabs (model) {
		view = new TabsView({model: model});
		view.render();
	}
	
	function preview (model) {
		view = new PreView ({model: model});
		view.render();
	}	
	
    return this;
}