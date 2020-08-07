$(document).ready(function(){

		console.log('loaded')
		var weapons = [
		{
			"name":"44_pistol",

			"damage":48,
			"ammo": 150,
			"fire_rate": 6,
			"range" : 119,
			"accuracy": 66,
			"weight": 4.2,
			"value": 99,
		},
		{
			"name":"10mm_pistol",
			"damage":18,
			"ammo" : 300,
			"fire_rate": 46,
			"range" : 119,
			"accuracy": 61,
			"weight": 4.2,
			"value": 53,
		},
		{
			"name":"assault_rifle",
			"damage":30,
			"ammo": 400,
			"fire_rate": 40,
			"range" : 119,
			"accuracy": 72,
			"weight": 13.1,
			"value": 144,
		}
		];

		

		

	$('#pic1').on('click', function picture(){
		console.log('loaded')
		var pic = '44_pistol.png'
		document.getElementById('pic1').src = pic.replace('90x90', '225x225');
        
	})

	
	
	$('.item-list a').on('click', function(e){
		var current_item = $(e.currentTarget).attr('class');
		console.log(current_item);

		for(item in weapons){
			if(weapons[item].name == current_item){
				console.log(weapons[item])

				var container = $('.item-stats');
				container.find('.damage').html(weapons[item].damage);
				container.find('.ammo').html(weapons[item].ammo);
				container.find('.fire_rate').html(weapons[item].fire_rate);
				container.find('.range').html(weapons[item].range);
				container.find('.accuracy').html(weapons[item].accuracy);
				container.find('.weight').html(weapons[item].weight);
				container.find('.value').html(weapons[item].value);
			};

		}

	});

	
	$('.item-list a').on('click', function(e){
		$('.item-list a').removeClass('active');
		$(e.currentTarget).addClass('active');
	});


	

});