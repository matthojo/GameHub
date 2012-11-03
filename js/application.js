$(document).ready(function() {

  $.getJSON('GameData.json', function(data) {
    var template = $('#gameTemplate').html();
    var html = Mustache.to_html("{{%IMPLICIT-ITERATOR}}\n"+template, data);
    $('#GamesList').html(html);

   	init();
	});

});

function init(){
	var hash = window.location.hash.replace('#', '');
  	if(hash) showOnlyCat(hash);

	$(".cat_select ul li a").on("click", function(){
		var hash = $(this).attr("href").replace('#', '');
		if(hash != "") showOnlyCat(hash);
		else showAllCat();
	});

	$(".game_item .description[rel=popover]").popover({trigger: "hover", placement:"right", title:"Description"});
}

function showOnlyCat(className){
 $("#GamesList ul .game_item").hide();
 $("#GamesList ul ."+className).show();
}

function showAllCat(){
 $("#GamesList ul .game_item").show();
}
