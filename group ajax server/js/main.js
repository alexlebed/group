var mediator;

$(function () {
    'use strict';
    var controller = new Controller(),
    	group = controller.initializeGroup();
	mediator = new Mediator();
	
	$.ajax({
		url: 'Ajax',
		success: function (data) {
			group.setStudent(data);
			controller.start(group);
		}
    });
});


