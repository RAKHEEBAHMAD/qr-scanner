function run(){
    let qr_code= document.getElementById('qr-code')
    let input=document.getElementById('input').value;
    let download=document.getElementById('download')
    if(input==''){
        alert("Enter Some text..")
        return;
    }
    let link=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
    download.href=link;
    qr_code.src=link;
}

