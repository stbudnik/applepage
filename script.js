
$('li a.iconBar').on("click",function(e){
   if($(e.target).hasClass('activ')){
       $(e.target).removeClass('fa-bars');
       $(e.target).addClass('fa-close');
       $('#popNav').show();
       $('nav.navContainer').css("background-color", "black");
       $('body').css("background-color", "black");
       $('.mainContainer').hide();
       $('.hide').hide(); 
       /*$('#navBigScreen').hide();
       $('#navShortScreen').show();*/
       $(e.target).removeClass('activ');
   }else{
       $(e.target).removeClass('fa-close');
       $(e.target).addClass('fa-bars');
       $('#popNav').hide();
       $('nav.navContainer').css("background-color", "rgba(0,0,0,0.8)");
       $('body').css("background-color", "rgb(242,242,242)");
       $('.mainContainer').show();
       $('.hide').show();
      /* $('#navBigScreen').show();
       $('#navShortScreen').hide();*/
       $(e.target).addClass('activ');
   }
});



$('div.shortFoot span i').each(function(i,el){
    $(el).on("click", function(e){
        control(e,i);
    });
});

function control(e,i){
   if($(e.target).hasClass('on' + i)){
       $(e.target).removeClass('fa-plus');
       $(e.target).addClass('fa-close');
       $($(e.target).parent().siblings("ul")[i]).show();        
       $(e.target).removeClass('on' + i);
   }else{
       $(e.target).removeClass('fa-close');
       $(e.target).addClass('fa-plus');
       $($(e.target).parent().siblings("ul")[i]).hide();
       $(e.target).addClass('on' + i);
   }     
}
