$("#clue").click(
    function(){  
        $(".chocolate").text("hover over the sentence below the image ");
        $("body").css("background-color","yellow"); 
    }
);

 $(".hover").mouseenter(
    function(){
        $(".hover").css("background-color", "yellow");
        $(".hover").text("next step is to double click on the image at the top");
        $("#double").attr("src","http://www.clker.com/cliparts/2/m/9/r/e/P/finger-double-click-md.png");
    });
    
    $("#double").dblclick(
    function(){
        $("#double").css("background-color", "blue");
        $(".chocolate").text("the next step is to click on the image below");
        $("#double").attr("src","https://img.grouponcdn.com/deal/c8cabe65315944f283b0435b3416a0bd/bd/v1/c700x420.jpg");
    });
    
 
    $("#one-step").click(
    function(){  
        $("#one-step").text("hover over the sentence below the image ");
        $("body").css("background-color","red"); 
        $("#one-step").attr("src" , "https://usercontent2.hubstatic.com/7231467.jpg");
         $(".hover").text("click on the image at the top");
    });
    
    $(".finalimage").dblclick(
    function(){    
        $(".finalimage").attr("src" , "http://www.clashroyaleguides.com/wp-content/uploads/2016/09/1473840023_maxresdefault.jpg");
        $(".close").text("you made it");
        $(".close").css("background-color", "blue");
       $("#one-step").hide();
        $("#double").hide();
         $(".hover").hide();
         $("#clue").hide();
          $(".chocolate").hide();
            $(".finalanswer").text("you are a legend");
    });