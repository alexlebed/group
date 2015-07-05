function Controller () {
	'use strict';
	var view = new GroupView();
	
	this.start = function (group) {
		mediator.subscribe('ShowTabs', Tabs);
		mediator.subscribe('Preview', preview);
		view.render(group);
	};

	function Tabs (student) {
		view = new ShowTabs();
		view.render(student);
	}
	
	function preview (tabName, student) {
		view = new Preview ();
		view.render(tabName,student);
	}

	this.initializeGroup = function () {
		'use strict';
		var group = new Group();
		
	//  можно убрать из main.js Ajax запрос и запустить синхронно.
/*   	function getXmlHttp(){
			var xmlhttp;
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
				  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
				  xmlhttp = false;
				}
			}
			
			if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
				xmlhttp = new XMLHttpRequest();
			}
			  return xmlhttp;
		}
			
		var xmlhttp = getXmlHttp();
		xmlhttp.open('GET', 'Ajax', false);
		xmlhttp.send(null);
		if(xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText);  
			group.setStudent(data);
		}
		
*/
		return group;
	}	
	
    return this;
}