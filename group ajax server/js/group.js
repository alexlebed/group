function Group () {
    'use strict';
    var students = [];

    this.add = function (student) {
        students.push(student);
    };

    this.getStudent = function () {
        return students;
    };
	
	this.setStudent = function (data) {
         students = data;
    }; 

    this.clear = function () {
        while (students.length) {s
            students.pop();
        }
    };
	
    this.toJSON = function () {
        var studenJSON = JSON.stringify(students);
        return studenJSON;
    };

}


