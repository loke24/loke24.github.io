$(document).ready(function(){
	
	var distance=$('.second-inner-in').offset();
			console.log(distance);
			
			
			
			/*if(distance==905){
				$('.second-inner-in').css({
					'top':'86px'
					
				
					
					});	
					console.log("fdfdf");
			}*/
			
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
			
			console.log(scroll);
			
			$('.second-inner-in').waypoint(function(){
				$('.second-inner-in').css({
					'top':'115px',
					'transform':'scale(1,1)',
					'transition':'all 0.7s'	
				});		
			},
			{
			offset:'70%'
			});		
	});
	$('.content').waypoint(function(){
		$('.content').addClass('animated fadeInRight anim');
		
	},{
		offset:'50%'	
		
	});
	$('.con').waypoint(function(){
		$('.con').addClass('animated fadeInLeft');
		
	},{
		
	offset:'50%'	
	});
	
	$('.second').waypoint(function(){
		$('.second').css({
			'background-size':'1500px 1000px',
			'transition':'all 3s'
			
		});
		
	},{
			offset:'50%'
		});
		$('.third-inner').waypoint(function(){
		$('.third-inner').css({
			'background-size':'1500px 1000px',
			'transition':'all 3s'
			
		});
		
	},{
			offset:'50%'
		});
	
	
});