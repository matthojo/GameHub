$.getJSON('GameData.json', function(data) {
    var template = $('#gameTemplate').html();
    var html = Mustache.to_html("{{%IMPLICIT-ITERATOR}}\n"+template, data);
    $('#GamesList').html(html);
});

$(".cat_select ul li a").on("click", function(){
	var hash = $(this).attr("href").replace('#', '');
	if(hash != "") showOnlyCat(hash);
	else showAllCat();
});

function showOnlyCat(className){
 $("#GamesList ul .game_item").hide();
 $("#GamesList ul ."+className).show();
}

function showAllCat(){
 $("#GamesList ul .game_item").show();
}