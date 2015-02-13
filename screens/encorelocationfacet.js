function gosearch() {
var searchstring = document.getElementById('target').value + document.getElementById('searchlocation').value;
var searchsite = document.getElementById('encorebase').value;
var searchurl = searchsite + searchstring;

window.location.href = searchurl;
}

function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
{
gosearch();
return false;
}
else
return true;
}