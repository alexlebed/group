function initializeGroup () {
	var user = [
	    {name:'Alex', lastName:'Ivanov', passport:'AN 111111',inn:'111111'},
		{name:'Maks', lastName:'Petrov', passport:'EN 123456'},
		{name:'Dima', lastName:'Sidorov', passport:'BB 654321'},
		{name:'Vanya', lastName:'Sergeev', passport:'BN 1478852'},
		{name:'Andrey', lastName:'Ivanov', passport:'DV 123658'},
		{name:'Sergeo', lastName:'Shilov', passport:'DC 214536'},
		{name:'Alena', lastName:'Nabokova', passport:'ER 365214'},
		{name:'Karina', lastName:'Petrova', passport:'CV 369872'}
	];
	
    var userString = JSON.stringify(user);

    return userString;
}

exports.initializeGroup = initializeGroup;