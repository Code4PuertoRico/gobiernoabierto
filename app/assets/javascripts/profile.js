$(function() {
    $("#askquestion").click(function() {
    	$("#expandedquestion").css("display", "none");
    	$("#newquestion").css("display", "block");
    });

    var mouseoverHighlight = function(element) {
        $(element).mouseenter(function() {
          $(element).css("background-color", "rgb(210, 210, 210)");
        }).mouseleave(function() {
          $(element).css("background-color", "rgb(240, 240, 240)");
        });
    }

    $("#submitquestion").click(function() {
        var subject_text = $("#newquestionsubject").val();
        var question_text = $("#newquestionquestion").val();

        var wrapper_element = document.createElement("div");
        $(wrapper_element).addClass("question");
        mouseoverHighlight(wrapper_element);
        var subject_element = document.createElement("h4");
        var question_element = document.createElement("p");

        $(subject_element).html(subject_text);
        $(question_element).html(question_text);
        $(wrapper_element).append(subject_element);
        $(wrapper_element).append(question_element);
        $("#questions").append(wrapper_element);

    	$("#expandedquestion").css("display", "block");
    	$("#newquestion").css("display", "none");
    });

    $(".question").each(function() {
    	mouseoverHighlight(this);
    });
});