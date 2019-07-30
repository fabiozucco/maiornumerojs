var a = parseFloat(prompt("Digite o primeiro valor"));
var b = parseFloat(prompt("Digite o segundo valor"));
var c = parseFloat(prompt("Digite o terceiro valor"));
higher = 0;

if (a>b && a>c){
	higher = a;
}else if (b>a && b>c) {
	higher = b;
}else if (c>a && c>b) {
	higher = c;
}

if (a==b && a==c && b==c){
	document.body.append("São todos iguais!");
}else {
	document.body.append("O maior valor é " + higher);
}