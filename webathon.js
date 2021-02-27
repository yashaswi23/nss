var btn = 't';
function c()
{
    var btn1 = document.getElementById('contact-submit');
    if(btn=="t"){
        btn1.value = "Submittion Done";
        btn = 'f';
    } else{
        btn1.value= "Send";
        btn = 't';
    }
}
