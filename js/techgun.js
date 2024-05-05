// $(document).ready(function () {
  // alert("Okay");
  // $("p").hide();
  // Events
  // $("#btn").click(function(){
  //     alert("clicked");
  //     $(this).hide();
  // });
  // dblclick
  // $("#colored-div").mouseenter(function(){
  //     $("p").hide();
  // });
  // $("#colored-div").mouseleave(function(){
  //     $("p").hide();
  // });
  // $("#colored-div").hover(function(){
  //     $("p").hide(); // enter
  // },
  // function(){
  //     $("p").show(); // leave
  // });
  // $("#colored-div").on({
  //     click :  function(){
  //         $(this).css("background-color","red");
  //     },
  //     mouseenter : function(){
  //         $(this).css("background-color","yellow");
  //     },
  //     mouseleave : function(){
  //         $(this).css("background-color","blue");
  //     }
  // }); //  on -- multiple event on one element
  // effects
  // $("#btn1").click(function(){
  //     $("#colored-div").hide(1000);
  // });
  // $("#btn1").click(function(){
  //     $("#colored-div").fadeIn(1000);
  // });
  // $("#btn1").click(function(){
  //     $("#colored-div").fadeToggle(1000);
  // });
  // $("#btn1").click(function(){
  //     $("#colored-div").fadeTo(1000, 0.3);
  // });
  // $("#btn2").click(function(){
  //     $("#colored-div").show(2000);
  // });
  // $("#btn2").click(function(){
  //     $("#colored-div").fadeOut(2000);
  // });
  // $("#btn1").click(function(){
  //     $("#colored-div").slideUp(1000);
  // });
  // $("#btn2").click(function(){
  //     $("#colored-div").slideDown(1000);
  // });
  // $("#btn1").click(function(){
  //     $("#colored-div").slideToggle(1000);
  // });
  // $("#btn1").click(function(){
  //     $("#colored-div").animate({
  //         opacity: '0.5',
  //         height: '600px',
  //         width: '50%'
  //     },5000)
  // });
  //  $("#btn2").click(function(){
  //     $("#colored-div").stop();
  // });
  //  $("#btn1").click(function(){
  //     $("#colored-div").hide(3000,function(){
  //         alert("hidden div");
  //     });
  // });
  // $("#btn1").click(function(){
  //     $("#colored-div").css("background-color","pink").slideUp(2000);
  // });
  // manipulating html
  // $("#btn1").click(function(){
  //    var test =  $("#colored-div").text();
  //    console.log(test); // fetch all the texts except html
  // });
  // $("#btn1").click(function(){
  //     var test =  $("#colored-div").html();
  //     console.log(test);
  //  });
  // $("#btn1").click(function(){
  //      $("#colored-div").html("<h1>Heading</h1>");
  //  });
  // $("#btn1").click(function(){
  //     $("#colored-div").text("A P");
  //  });
  // $("#btn1").click(function(){
  //     var valu= $("#ip1").val();
  //     console.log(valu);
  //  });
  // $("#btn1").click(function(){
  //     // var attre= $("#link").attr('href');
  //     // var attre= $("#link").attr('class');
  //     // $("#link").attr('class',"black");
  //     $("#link").attr({
  //         "class":"black",
  //         "href": "https://www.yahoo.com"
  //     });
  //     // console.log(attre);
  //  });

  // $("#list").append("<li>yellow</li>")
  // $("#list").prepend("<li>yellow</li>")
  // $("#list").after("<li>yellow</li>")
  // $("#list").before("<li>yellow</li>");

  // $("#list").empty(); children is empty
  // $("#list").remove(); ul also gone

  // $("#btn").click(function(){
  //     $("#box").addClass("circle")
  // });

  // $("#btn").click(function(){
  //     $("#box").removeClass("red")
  // });

  // $("#btn").click(function(){
  //     $("#box").toggleClass("circle")
  // });

  // $("#btn").click(function(){
  //     // var css = $("#box").css("background-color");
  //     // $("#box").css("background-color","yellow");
  //     // console.log(css);

  //     $("#box").css({
  //         "background-color":"yellow",
  //         "width":"900px"
  //     });
  // });

  // $("#btn").click(function () {
  //   // var css = $("#box").innerWidth();
  //   var css = $("#box").outerWidth();
  //   alert(css);
  // });

  // var elm = $("#span1").parent();
  // var elm = $("#span1").parents();
  // var elm = $("#span1").parentsUntil("body"); // body k neeche tak
  // elm.css("border","1px solid red");

  // var elm = $("#list").children();
  // var elm = $("#list").find("#span2");
  // elm.css("border","1px solid red");

  // var elm = $("#item1").siblings();
  // var elm = $("#item1").next();// child 4
  // var elm = $("#item1").next().next(); // child 5
  // var elm = $("#item1").nextAll(); // after it
  // var elm = $("#item1").nextUntil("#item2"); // till id item2 but don't count this
  // same for prevUntil,prevAll,prev
  // elm.css("border","1px solid red");

  // var jQ = $.noConflict();

  // jQ("#btn").click(function () {
  //   jQ("#pra").text("Text changed");
  // });


 

  // jquery plugins 
  // https://www.jqueryscript.net/
  // https://www.bestjquery.com/
  // https://codepen.io/
// });


$(document).ready(function () {
  $('.flipTimer').flipTimer({

      // count up or countdown
      direction: 'down',

      // the target <a href="https://www.jqueryscript.net/time-clock/">date</a>
      date: 'January 20, 2040 08:30:30',

      // callback works only with direction = "down"
      callback: function () { alert('times up!'); }

  });
});