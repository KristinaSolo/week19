let num1, num2, result;

class Calc{
    static Plus(a,b){
        result = +a +  +b;
        return result
    }

    static Minus(a,b){
        result = a - b;
        return result
    }

    static Multiply(a,b){
        result = a * b;
        return result
    }

    static Division(a,b){
        result = a / b;
        return result
    }
}




function calcPlus(){
    num1 = document.getElementById('summ1').value;
    num2 = document.getElementById('summ2').value;
    // result = +num1 + +num2;
    Calc.Plus(num1,num2);
   document.getElementById('result').innerHTML = result;
 
 
}

function calcMinus(){
    num1 = document.getElementById('summ1').value;
    num2 = document.getElementById('summ2').value;
    // result = num1 - num2;
    Calc.Minus(num1,num2);
   document.getElementById('result').innerHTML = result;
  
  
}

function calcMultiply(){
    num1 = document.getElementById('summ1').value;
    num2 = document.getElementById('summ2').value;
    // result = num1 * num2;
    Calc.Multiply(num1,num2);
   document.getElementById('result').innerHTML = result;
  
 
}

function calcDivision(){
    num1 = document.getElementById('summ1').value;
    num2 = document.getElementById('summ2').value;
    Calc.Division(num1,num2);
    if(num2 == 0){
        alert('На 0 делить нельзя');
        result = '-';
    }

    // if(num2 != 0) {     //0 != 0    false
    //     result = num1 / num2;
    //   }
      document.getElementById('result').innerHTML = result;

      
}








  

  


