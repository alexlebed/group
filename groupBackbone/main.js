var mediator;
	 var peopleCollection;
$(function () {
    'use strict';
     var controller = new Controller();
     mediator = new Mediator();
     controller.start();
	 var add = new AddView({collection: peopleCollection});
});