function submit_form(){

  let name=document.getElementById("name").value;
  let bio=document.getElementById("bio").value;
  let location=document.getElementById("location").value;
  let website=document.getElementById("website").value;
  let email=document.getElementById("email").value;
  let phone=document.getElementById("phone").value;

  var nameptr = /^[a-zA-Z\s]*$/;
  var bioptr = /^[a-zA-Z\s1-9]*$/;
  var locationptr = /^[a-zA-Z\s1-9]*$/;
  let websiteptr=/^\w+([\.-]?\w+)*.\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var contact=/^[+]{1}[0-9]*$/;
  if(!name.match(nameptr))
  {
    alert("first false");
  
  }
  if(!bio.match(bioptr))
  {
    alert("bio false");
  
  }  
  if(!location.match(locationptr))
  {
    alert("location false");
  
  }  
  if(!website.match(websiteptr))
  {
    alert("website false");
  
  }
  if(!email.match(emailformat))
  {
    alert("email false");
  
  }
  if(!phone.match(contact))
  {
    alert("phone false");
  
  }

}