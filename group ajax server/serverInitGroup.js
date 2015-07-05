function initializeGroup () {
	var user = [];
	
	function Student (data) {
		'use strict';
		var name = data.name,
			lastName = data.lastName,
			passport = data.passport;
		return { name: name,
				 lastName: lastName,
				 passport: passport
			   };
	}

    user.push(new Student({name:'Alex', lastName:'Ivanov', passport:'AN 111111'}));
    user.push(new Student({name:'Maks', lastName:'Petrov', passport:'EN 123456'}));
    user.push(new Student({name:'Dima', lastName:'Sidorov', passport:'BB 654321'}));
    user.push(new Student({name:'Vanya', lastName:'Sergeev', passport:'BN 1478852'}));
    user.push(new Student({name:'Andrey', lastName:'Ivanov', passport:'DV 123658'}));
    user.push(new Student({name:'Sergeo', lastName:'Shilov', passport:'DC 214536'}));
    user.push(new Student({name:'Alena', lastName:'Nabokova', passport:'ER 365214'}));
    user.push(new Student({name:'Karina', lastName:'Petrova', passport:'CV 369872'}));
	
    var userString = JSON.stringify(user);

    return userString;
}

exports.initializeGroup = initializeGroup;