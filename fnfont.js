$(function() {
	$("#upSize").click(function() {
	  $("*").children().each(function() {
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
	  $("*").children().each(function() {
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

  function upFontSize() {
	txt = document.querySelector("nav");
	style = window
	  .getComputedStyle(txt, null)
	  .getPropertyValue("font-size");
	currentSize = parseFloat(style);
	txt.style.fontSize = currentSize + 2 + "px";
  }
  function downFontSize() {
	txt = document.querySelector("body");
	style = window
	  .getComputedStyle(txt, null)
	  .getPropertyValue("font-size");
	currentSize = parseFloat(style);
	txt.style.fontSize = currentSize - 2 + "px";
  }