function formValidate()
{
	
event.preventDefault()
var Firstname=document.getElementById("fname");
var Lastname=document.getElementById("lname");
var Email=document.getElementById("email");
var MobileNum=document.getElementById("MobileNo")
var Date=document.getElementById("date");
var Gender=document.getElementById("Gender");

if(!validateMobile(MobileNum)){
alert("Mobile number is not valid");
alert('User Mobile Number must have numeric characters only');	
}

if(!validateEmail(Email)){
alert("Email is not valid");
}

if(!validateDate(Date)){
alert("Date is not valid");
}
createTable();
return true;

}



function validateMobile(MobileNum){
var letters = /^[0-9]+$/;
if(MobileNum.value.match(letters))
{
return true;
}
else
{
MobileNum.focus();
return false;
}
}

function validateEmail(Email)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(Email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
Email.focus();
return false;
}
}

function validateDate(Date)
{  
    var Split = Date.value.split("/");

if (parseInt(Split[2]) > 2003) 
{
    alert("DOB year should be less than 2003");
    Dates.focus();
    return false;
}  
return true;
}



function createTable()
{
event.preventDefault()
var Firstname=document.getElementById("fname");
var Lastname=document.getElementById("lname");
var Email=document.getElementById("email");
var MobileNum=document.getElementById("MobileNo")
var Date=document.getElementById("date");
var Gender=document.getElementById("Gender");
var tbody = '';


    var theader = '<div><table border="1">\n';
        
          tbody += '<tr>';
            tbody += '<td>' + "Firstname" + '</td>' +'<td>'+ Firstname.value+'</td>';
            tbody += '</tr>';
          
		  tbody += '<tr>';
         tbody += '<td>'+ "Lastname" + '</td>' + '<td>'+Lastname.value+'</td>';
	     tbody += '</tr>';
          tbody += '<tr>';
         tbody += '<td>'+ "Date" + '</td>' + '<td>'+Date.value+'</td>';
         tbody += '</tr>';
          tbody += '<tr>';
         tbody += '<td>'+ "Email" + '</td>' + '<td>'+Email.value+'</td>';
          tbody += '</tr>';
          tbody += '<tr>';
         tbody += '<td>'+ "MobileNum" + '</td>' + '<td>'+MobileNum.value+'</td>';
          tbody += '</tr>';
          tbody += '<tr>';
         tbody += '<td>'+ "Gender" + '</td>' + '<td>'+Gender.value+'</td>';
        tbody += '</td>'
        tbody += '</tr>\n';

var tfooter = '</table></div>';
document.getElementById('Data_display').innerHTML = theader + tbody + tfooter;

}


function reset(){
	if(Firstname.value==''|| Lastname.value==''||Email.value==''||MobileNum.value==''||Date.value==''||Gender.value==''){
		return console.clear();
	}
}
