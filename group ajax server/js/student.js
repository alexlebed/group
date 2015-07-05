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
