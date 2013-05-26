$(function() {
    console.log("file starting to run");
    $("#askquestion").click(function() {
    	$(".expandedquestion").each(function() {
            $(this).addClass("hidden")
        });
    	$("#newquestion").removeClass("hidden");
    });

    var getRandomNonnegativeInt = function() {
        return Math.floor(Math.random() * (Math.pow(2, 31)));
    }

    var mouseoverHighlight = function(element) {
        $(element).mouseenter(function() {
          $(element).css("background-color", "rgb(210, 210, 210)");
        }).mouseleave(function() {
          $(element).css("background-color", "rgb(240, 240, 240)");
        });
    }

    var clickExpand = function(element) {
        $(element).click(function() {
            $(".expandedquestion").each(function() {
                $(this).addClass("hidden");
            });
            $("#expanded" + $(element)[0].id).removeClass("hidden");
        });
    }

    console.log("click listener getting attached");
    $("#submitquestion").click(function() {
        console.log("submit click listener call");
        var subject_text = $("#newquestionsubject").val();
        var question_text = $("#newquestionquestion").val();

        $("#newquestionsubject").val("");
        $("#newquestionquestion").val("");

        var question_id = getRandomNonnegativeInt().toString();

        var question_wrapper_element = document.createElement("div");
        $(question_wrapper_element).addClass("question");
        $(question_wrapper_element).attr("id", question_id)
        mouseoverHighlight(question_wrapper_element);
        clickExpand(question_wrapper_element);
        var subject_element = document.createElement("h4");
        var question_element = document.createElement("p");

        $(subject_element).html(subject_text);
        $(question_element).html(question_text);
        $(question_wrapper_element).append(subject_element);
        $(question_wrapper_element).append(question_element);
        $("#questions").append(question_wrapper_element);

        $(".expandedquestion").each(function() {
            $(this).addClass("hidden");
        });

        var expanded_question_div = document.createElement("div");
        $(expanded_question_div).attr("id", "expanded" + question_id);
        $(expanded_question_div).addClass("expandedquestion");
        var question_div = document.createElement("div");
        var answer_div = document.createElement("div");
        var question_h = document.createElement("h3");
        var subject_h = document.createElement("h4");
        var question_p = document.createElement("p");
        var answer_h = document.createElement("h3");
        var answer_p = document.createElement("p");

        $(question_h).html("Pregunta");
        $(subject_h).html(subject_text);
        $(question_p).html(question_text);
        $(answer_h).html("Contestacion");
        $(answer_p).html("Esta pregunta todavia no ha sido contestada.");
        $(question_div).append(question_h);
        $(question_div).append(subject_h);
        $(question_div).append(question_p);
        $(answer_div).append(answer_h);
        $(answer_div).append(answer_p);
        $(expanded_question_div).append(question_div);
        $(expanded_question_div).append(answer_div);
        console.log(expanded_question_div);
        $("#expandedquestions").append(expanded_question_div);

    	$("#newquestion").addClass("hidden");
    });

    $(".question").each(function() {
    	mouseoverHighlight(this);
        clickExpand(this);
    });
});