document.getElementById("submit").onclick = function(){
    a=document.getElementById("atextbox").value;


b=document.getElementById("btextbox").value;

document.getElementById("elabel").innerHTML = "RECEIPT "
document.getElementById("dlabel").innerHTML = "ADDRESS : " + b 
document.getElementById("flabel").innerHTML = "ORDER : " + a
document.getElementById("glabel").innerHTML = "....THANK YOU FOR PATRONIZING US. "




if(a=="" || a==null || b==""){
    a=window.alert("Fill in the blank spaces");
}

const visaBtn=document.getElementById("visaBtn");
    const mastercardBtn=document.getElementById("mastercardBtn");
    const paypalBtn=document.getElementById("paypalBtn");


    if(visaBtn.checked){
        document.getElementById("hlabel").innerHTML = "you are paying with Visa "

    }
    else if(mastercardBtn.checked){
        document.getElementById("hlabel").innerHTML = "you are paying with Mastercard "

    }
    else if(paypalBtn.checked){
        document.getElementById("hlabel").innerHTML = "you are paying with Paypal "

    }
    else{
        window.alert("you must select a payment type");
    }



} 

    
