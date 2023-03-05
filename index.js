function ac(){
  document.getElementById('result').value='';
}
function show(input){
    document.getElementById('result').value+=input;
}
function finalRes(){
   let fin =eval(document.getElementById('result').value) 
   document.getElementById('result').value=fin;
}