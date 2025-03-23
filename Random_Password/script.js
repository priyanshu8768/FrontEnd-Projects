const password=document.getElementById("password");
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghikklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%^&*()_+~{}|[]<>-=";

const allchars=uppercase+lowercase+number+symbol;

function createpass(){
    let pass="";
    pass+=uppercase[Math.floor(Math.random()*uppercase.length)];
    pass+=lowercase[Math.floor(Math.random()*lowercase.length)];
    pass+=number[Math.floor(Math.random()*number.length)];
    pass+=symbol[Math.floor(Math.random()*symbol.length)];
    
    while(length>pass.length){
        pass+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    password.value =pass;
}

function copypass(){
    password.select();
    document.execCommand("copy");
}