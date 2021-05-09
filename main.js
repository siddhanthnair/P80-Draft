function getParagraph1(){
    var inputs= [];
    for(var i= 1 ; 1<=6 ; i++)
{
    inputs.push(document.getElementById("para1_input_box_" + i).value);

}
var para1 = inputs.join(". ");

document.getElementById("showParagraph1").innerHTML=para1;

}

function getParagraph2(){
    var inputs= [];
    for(var i= 1 ; 1<=6 ; i++)
{
    inputs.push(document.getElementById("para2_input_box_" + i).value);

}
var para2 = inputs.join(". ");

document.getElementById("showParagraph2").innerHTML=para2;

}
