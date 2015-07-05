function tpl() {
    var tableTpl = [
        '<p>',
        '<%= collection[button] %>',
        '</p>',
        '<div id = out></div>'].join('');
    return tableTpl;
}

function tplAll() {
    var allTpl = [
        '<p>',
        '<% _.each(collection, function(num, key){ %>',
        '<%= translate[key] + ": " + num %>',
        '<br>',
        ' <% });%>',
        '</p>',
        '<div id = out></div>'].join('');
    return allTpl;
}


