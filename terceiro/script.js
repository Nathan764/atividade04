function numero(){
    var n1 = Number(document.getElementsByTagName("n1").value)
    var n2 = Number(document.getElementsByTagName("n2").value)
    var n3 = Number(document.getElementsByTagName("n3").value)
    
    if (n1 > n2 && n1 > n3){
    document.querySelector('p').innerHTML = `${n1}`;
}
    if (n2 > n1 && n2 > n3){
    document.querySelector('p').innerHTML = `${n2}`;
}
if (n3 > n1 && n3 > n2){
    document.querySelector('p').innerHTML = `${n3}`;
}
}