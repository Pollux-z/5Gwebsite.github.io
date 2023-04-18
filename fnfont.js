$(function() {
	$("#upSize").click(function() {
	  $("div").children().each(function() {
		var size = parseInt($(this).css("font-size"));
		size = size + 2 + "px";
		$(this).css({
		  'font-size': size
		});
	  });
	});
  });

  $(function() {
	$("#downSize").click(function() {
	  $("div").children().each(function() {
		var size = parseInt($(this).css("font-size"));
		size = size - 2 + "px";
		$(this).css({
		  'font-size': size
		});
	  });
	});
  });

  $(function() {
	$("#normalSize").click(function() {
	  $("div").children().each(function() {
		var size = parseInt($(this).css("font-size"));
        size2 = size + "px";
		$(this).css({
		  'font-size': size2
		});
	  });
	});
  });