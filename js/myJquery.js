$(document).ready(function () {
  //your jquery code here

  console.log("we are using jquery");
  console.log("New File");

  // Jquery Syntax
  // $('selector').action()

  // clicks on all the p elements (Element selector)
  // $('p').click(); // click on p

  //   $("p").click(function () {
  //     console.log("you clicked on p", this);
  //     // $(this).hide();
  //     // $('#id').hide();
  //     // $('.class').hide();
  //   }); //do this when we click on p

  //   $("p").dblclick(function () {
  //     console.log("you double clicked on p", this);
  //     // $(this).hide();
  //     // $('#id').hide();
  //     // $('.class').hide();
  //   }); //do this when we double click on p

  //   $("p").mouseenter(function () {
  //     console.log("you entered:", this);
  //     // $(this).hide();
  //     // $('#id').hide();
  //     // $('.class').hide();
  //   }); //do this when entered on that element

  // $("p").hover(function () {
  //     console.log("you hovered on p", this);
  //     // $(this).hide();
  //     // $('#id').hide();
  //     // $('.class').hide();
  //   },
  //   function(){
  //     console.log("Thanks for coming");
  //   } ); //do this when we hover on p

  // there are 3 main types of selectors in jQuery

  // 1. Element selector
  // clicks on all the p elements (Element selector)
  // $('p').click(); // click on p automatically

  // 2. class selector
  // $('.odd').click(); or $('p.odd').click()

  // 3. id selector
  // $('#second').click();

  // Other selectors
  // $('*').click() // clicks on all the elements
  // $('p:first').click() // clicks on the first paragraph

  //   Events in Jquery
  // Mouse Events -- click,double click,mouse enter, mouse leave
  // Keyboard events -- keypress, keydown, keyup
  // form  events -- submit, change ,focus, blur
  // window - load,resize, scroll ,unload

  //   demoing the on method

  $("p").on({
    click: function () {
      console.log("Thanks for clicking,", this);
    },

    mouseleave: function () {
      console.log("Mouse leave");
    },
  });

  //   $('#wiki').hide(1000, function(){
  //     console.log("Hidden");
  //   }); // it vl hide after 1 sec and func is executed

  //   $('#wiki').show(1000, function(){
  //     console.log("show");
  //   }); // it vl show after 1 sec and func is executed

  $("#bot").click(function () {
    // $('#wiki').toggle(1000);
    $("#wiki").fadeOut(5000);
  });

  //Slide Methods -- speed and callback method are optional
  //   $('#wiki').slideUp(3000,function(){
  //     console.log("down");
  // });
  //   $('#wiki').slideDown(3000);
  //   $('#wiki').slideToggle(1000);

  //animate function in jQuery
  //   $("#wiki").animate(
  //     {
  //       opacity: 0.3,
  //       height: "150px",
  //       width: "350px",
  //     },
  //     'fast');

  //   $("#wiki").animate({ opacity: 0.3 }, 4000);
  //   $("#wiki").animate({ opacity: 0.9 }, 4000);
  //   $("#wiki").animate({ height: "350px" }, 1000);

  //   $('#wiki').addClass('myclass');
  // $('#wiki').removeClass('myclass');
  // $('#wiki').css('background-color','red');
  // $('#wiki').css('background-color')


 
});
