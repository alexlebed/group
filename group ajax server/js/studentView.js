function StudentView (student) {
	'use strict';
	(function () {
	    var	studentName = $('<li>' + student.name + '</li>').on('click', function () {
			                mediator.publish('ShowTabs', student);
		});
		$('#demo').append(studentName);
	})();
}
 