function Preview () {
    'use strict';
    this.render = function (buttonClick, student) {
		var translate = {
            name: 'Имя',
            lastName: 'Фамилия',
            passport: 'Пасспорт',
        },
			tempAllData = tplAll(),
            tempString = tpl(),
            template;

        if(buttonClick === "all") {
                template = _.template(tempAllData);
        } else {
                template = _.template(tempString);
        }
		
        $("#info").html(template({collection: student, 
		                          button: buttonClick, 
								  translate: translate}));

        $('#out').on('click', function () {
            $("#info").html("");
        });
    }
}


