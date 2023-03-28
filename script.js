function convert(){
    var degree=document.getElementById('degree').value ;


    var type=document.getElementById('temp_diff').value;
    if(type=='Celsius'){
        document.getElementById('result').innerHTML =degree;
    }
    else if(type =='Fahrenheit'){
        // var fa = eval('(degree-32)*5/9');
        var fa=(degree-32)*5/9;
        document.getElementById('result').innerHTML=fa;
    }else if(type == 'Kelvin'){
        var ke =parseInt(degree)+273.15;
        document.getElementById('result').innerHTML=ke;
    }
}