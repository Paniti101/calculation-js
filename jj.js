const num1 = parseFloat( prompt('Enter the first number: '));
    const num2 = parseFloat( prompt('Enter the second digit: '));
    const operator = prompt('Put symbol (+, -, /, *)');
    let result = null;

    if(isNaN(num1) || isNaN(num2)){
      alert('Wrong Input! Refresh the page again and privide data!');
    }else
    
        if(operator == '+'){
          result = num1 + num2;
        }else if(operator == '-'){
          result = num1 - num2;
        }else if(operator == '*'){
          result = num1 * num2;
        }else if(operator == '/'){
          result = num1 / num2;
        }
alert(result);