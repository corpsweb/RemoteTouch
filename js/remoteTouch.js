var businessDomain="";
var stationKey="";
var sPageURL = window.location.search.substring(1);
var sURLVariables = sPageURL.split('&');
for (var i = 0; i < sURLVariables.length; i++)
{
	var sParameterName = sURLVariables[i].split('=');
	if (sParameterName[0]=="url")
	{
		businessDomain=sParameterName[1];
	}
	else if (sParameterName[0]=="key")
	{
		stationKey=sParameterName[1];
	}
    }

//alert(businessDomain);
//alert(stationKey);

function sendRemoteTouch(i_eventName)
{
    var url= 'http://' + businessDomain + '/WebService/sendRemoteTouch.ashx?key=' + stationKey +'&event=' + i_eventName+ '&callback=?';
    //alert(url);
    $.getJSON(url, onSendRemoteTouch);
}

function onSendRemoteTouch(myData)
{
    //alert("onSendRemoteTouch");
}
