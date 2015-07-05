function GroupView () {
	'use strict';
	this.render = function (group) {
	    var students = group.getStudent(),
			stud;

		_.each(students, function (num) {
			stud = new StudentView(num);
		});
	};
}