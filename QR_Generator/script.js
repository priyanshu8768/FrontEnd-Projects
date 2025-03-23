let imgBox = document.getElementById("imgBox");
let qrimg = document.getElementById("qrimg");
let qrtxt =document.getElementById("qrtxt");


function generateQR(){
    if(qrtxt.value.length>0){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtxt.value;
        imgBox.classList.add("show-img");
    }else{
        qrtxt.classList.add("error");
        qrtxt.style.border="1px solid red";
        setTimeout(()=>{
            qrtxt.classList.remove("error");
            qrtxt.style.border="1px solid #494eea";
        },1000);
    }

}