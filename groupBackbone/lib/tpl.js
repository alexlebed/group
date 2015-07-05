function list () {
    var list = [
	    '<span class=link>',
        '<%= collection.name %>',
		'</span>'
		].join('');
    return list;
}

function button () {
    var button = [
	'<%_.each(collection, function(num, key){%>',
        '<button  class=button>',
        '<%= key %>',
        '</button>',
		'<% }) %>'
    ].join('');
    return button;
}

function preview () {
    var preview = [
        '<% _.each(collection, function(num, key){ %>',
        '<%= num %>',
        '<br>',
        ' <% });%>',
        '<div id = close></div>'].join('');
    return preview;
}

