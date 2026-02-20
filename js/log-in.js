   
$("#submit").click(function(){
    if($("#email").val()==='' && $("#password").val()===''){
    alert('Email And Password is Required');
} else{
    alert('Email And Password is Accepted');
}
});
