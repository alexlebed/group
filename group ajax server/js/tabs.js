function ShowTabs () {
	'use strict';
	this.render = function (student) {
		$('#tabs, #info').html('');

		for(var key in student) {
			createButtonName(key);
		}
		createButtonName("all");

		function createButtonName (tabsName) {
			var button = $('<button>' + tabsName + '</button>').addClass('show').on('click', function () {
				mediator.publish('Preview', tabsName, student); 
			});
			$('#tabs').append(button);
		}
	};
}