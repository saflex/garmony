jQuery(document).ready(function(){


/* слайдер цен */

jQuery("#slider").slider({
	min: 12500,
	max: 370050,
	values: [12500,370050],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){

	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values",0,value1);	
});

	
jQuery("input#maxCost").change(function(){
		
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 370050) { value2 = 370050; jQuery("input#maxCost").val(370050)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values",1,value2);
});





/* слайдер цен */

jQuery("#slider2").slider({
	min: 1,
	max: 6,
	values: [1,6],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost2").val(jQuery("#slider2").slider("values",0));
		jQuery("input#maxCost2").val(jQuery("#slider2").slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery("input#minCost2").val(jQuery("#slider2").slider("values",0));
		jQuery("input#maxCost2").val(jQuery("#slider2").slider("values",1));
    }
});

jQuery("input#minCost2").change(function(){

	var value1=jQuery("input#minCost2").val();
	var value2=jQuery("input#maxCost2").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost2").val(value1);
	}
	jQuery("#slider2").slider("values",0,value1);	
});

	
jQuery("input#maxCost2").change(function(){
		
	var value1=jQuery("input#minCost2").val();
	var value2=jQuery("input#maxCost2").val();
	
	if (value2 > 7) { value2 = 7; jQuery("input#maxCost2").val(7)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost2").val(value2);
	}
	jQuery("#slider2").slider("values",1,value2);
});






/* слайдер цен */

jQuery("#slider3").slider({
	min: 0,
	max: 6,
	values: [0,6],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost3").val(jQuery("#slider3").slider("values",0));
		jQuery("input#maxCost3").val(jQuery("#slider3").slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery("input#minCost3").val(jQuery("#slider3").slider("values",0));
		jQuery("input#maxCost3").val(jQuery("#slider3").slider("values",1));
    }
});

jQuery("input#minCost3").change(function(){

	var value1=jQuery("input#minCost3").val();
	var value2=jQuery("input#maxCost3").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost3").val(value1);
	}
	jQuery("#slider3").slider("values",0,value1);	
});

	
jQuery("input#maxCost3").change(function(){
		
	var value1=jQuery("input#minCost3").val();
	var value2=jQuery("input#maxCost3").val();
	
	if (value2 > 7) { value2 = 7; jQuery("input#maxCost2").val(7)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost3").val(value2);
	}
	jQuery("#slider3").slider("values",1,value2);
});



// фильтрация ввода в поля
	jQuery('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});


});



