/*메뉴호버(product)*/ 
 $(document).ready(function (){
	 $("#pro span").mouseenter(function(){
		 $("#p2").stop().animate({height: "450px"});
	 } );
	 $("#p2").mouseleave(function(){
		 $("#p2").stop().animate({height: "0"});
	 } );
	 
	 
	 // console.log(  $("#f4").position().top ); //2103
	 $(window).scroll(function(){
			if(  $(window).scrollTop()>= 2500){
					$("#f4>.b1").addClass("bb1");
					$("#f4>.b2").addClass("bb2");
					$("#f4>.b3").addClass("bb3");
			}
	 });
	
	 

	
	  let pro1 =  ( $("#product div").width() * (-1)) ;	 
	 
	  $("#product").css("left", pro1+"px");	 
	
	//왼쪽방향 화살표
	 $(".arrowr").click(function(){
			proLeft()
	 });
	 
	 	//오른쪽방향 화살표
	 $(".arrowl").click(function(){
			proRight()
	 });
	 
	 
	 //왼쪽방향으로 이동	
	 function proLeft(){
		 $("#product").stop().animate({left: pro1*2 },"slow",function(){
				$("#product").append( $("#product>div").first() );
				$("#product").css("left" , pro1+"px" )
		 });		 
	 }
	 
	 	 //오른쪽방향으로 이동
		
	 function proRight(){
		 $("#product").stop().animate({left: 0 },"slow",function(){
				$("#product").prepend( $("#product>div").last() );
				$("#product").css("left" , pro1+"px" )
		 });		 
	 }

	 
 

});///////전체 끝