function validateAdmin()
{
  var auname = document.forms["admin"]["auname"].value;
  var apass = document.forms["admin"]["apass"].value;

  if(auname != "Admin" || apass !="Admin")
  {
    alert("Please Enter Valid Username Or Password");
    return false;
  }

}

function validateLogin()
{
  var uname = document.forms["login"]["uname"].value;
  var pass = document.forms["login"]["pass"].value;

  if(uname != "user1" || pass !="user1")
  {
    alert("Please Enter Valid Username Or Password");
    return false;
  }

}

function Register()
{
  document.getElementById('p1').innerHTML= "User Name : " +document.register.uname.value;
  document.getElementById('p2').innerHTML= "Email ID : " +document.register.email.value;
  document.getElementById('p3').innerHTML= "Phone No : " +document.register.pno.value;
  document.getElementById('p4').innerHTML= "Password : " +document.register.pass.value;
  return false;

}