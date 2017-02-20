/**
 * Created by ZhangJikai on 2017/2/20.
 */

var inputArea = document.getElementById("input-area");
var outputArea = document.getElementById('output-area');


function transferText(text) {
    var lineBreakTag = "\n";
    var displayLinkBreak = "\\n";
    var quoteTag = "\"";
    var joinTag = " + ";
    var string = quoteTag;

    if(text == null || text == "") {
        return "";
    }
    for(var i = 0; i < text.length; i++) {
        switch (text[i]) {
            case lineBreakTag:
                string += displayLinkBreak;
                string += quoteTag;
                string += joinTag;
                string += lineBreakTag;
                string += quoteTag;
                break;
            default :
                string += text[i];
        }

        /*if(text[i] == lineBreakTag) {
            string += "\\n";

        } else {}*/


    }
    return string;
}

function inputChange() {
    var result = transferText(inputArea.value);
    outputArea.innerHTML = result;


}


/*$('#input-area').bind('input propertychange', inputChange);*/


//inputArea.addEventListener('change', inputChange, false);
if (inputArea.addEventListener) {
    inputArea.addEventListener('input', inputChange, false);
} else if (inputArea.attachEvent) {
    inputArea.attachEvent('onpropertychange', inputChange);
}
