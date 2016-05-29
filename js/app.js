
$(document).ready(function() {

	console.log( "document loaded........" );
	$("a","#mainDiv").click(function(event) {
		console.log( "document loaded" );
		event.preventDefault();
		var alink = $(this);

		if($(alink).attr('href')!='#')
			$("#mainDiv").load($(alink).attr('href'));
	});

	$("a",".navbar-default").click(function(event) {
		console.log("document loaded navbar");
		event.preventDefault();
		var alink = $(this);		
		if($(alink).attr('href')!='#'){
			$(".navbar-nav").find('li').removeClass('active');
			$(alink).parent('li').addClass('active');
			$("#mainDiv").load($(alink).attr('href'));
		}
			
	});

});