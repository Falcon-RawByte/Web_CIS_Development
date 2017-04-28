	$(document).ready(function() {
	$.ajax({
		url: 'php/fill_crew.php',
				success: function(resp) //TODO: get rid of freakin empty string at the end of items (look 4 split problems)
		{
			/*$("#crew option").each(function() {
				$(this).remove();
			});*/
				var items = resp.split("\n");
				for (var i = items.length - 2; i >= 0; i--) {	//temporary solution
					$('#crew').append($('<option>', { 
						text: items[i],
					}));
				};
			}
		})
	.done(function(){
	})
});

$(document).ready(function(){
	$.ajax({
		url: 'php/fill_driver.php',/*default: Intelligent Guess (Other values: xml, json, script, or html)*/
		success: function(resp){
			var items = resp.split("\n");
			for (var i = items.length - 2; i >= 0; i--) {	//temporary solution
					$('#Driver_1').append($('<option>', { 
						text: items[i],
					}));
					$('#Driver_2').append($('<option>', { 
						text: items[i],
					}));
				};
		}
		});
})

$(document).ready(function(){
	$.ajax({
		url: 'php/fill_tractor.php',/*default: Intelligent Guess (Other values: xml, json, script, or html)*/
		success: function(resp){
			var items = resp.split("\n");
			for (var i = items.length - 2; i >= 0; i--) {	//temporary solution
					$('#Tractor').append($('<option>', { 
						text: items[i],
					}));
				};
		}
		});
})

$(document).ready(function(){
	$.ajax({
		url: 'php/fill_trailer.php',/*default: Intelligent Guess (Other values: xml, json, script, or html)*/
		success: function(resp){	
			var items = resp.split("\n");
			for (var i = items.length - 2; i >= 0; i--) {	//temporary solution
					$('#Trailer').append($('<option>', { 
						text: items[i],
					}));
				};
		}
		});
})


//$(document).ready(function(){$("#crew").trigger("change");})Ы

$("#crew").change(function(){
		var str = $('#crew option:selected').text().split('-');
		$("#Driver_1 :contains(" + str[0].trim() + ")").attr("selected", "selected");
		$("#Driver_2 :contains(" + str[1].trim() + ")").attr("selected", "selected");
		$("#Tractor :contains(" + str[2].trim() + ")").attr("selected", "selected");
		$("#Trailer :contains(" + str[3].trim() + ")").attr("selected", "selected");
	})
