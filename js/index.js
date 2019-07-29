var number1=parseFloat(prompt('Informe o primeiro valor:',''));
var number2=parseFloat(prompt('Informe o segundo valor:',''));
var operation=prompt("Digite a operação: ")
var result=0;

if (operation==='+')
{
result=(number1+number2);
}
if (operation==='-')
{
result=(number1-number2);	
}
if  (operation==='/') 
{
result=(number1/number2);	
}
if (operation==='*') 
{
result=(number1*number2);	
}
document.body.append(result);


