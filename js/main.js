let a = parseInt(prompt('Enter the number '));
let x=a;

let sum=0;

document.write(`Given number ${a} <br>`)

 while (a>0)
    {
        let rem = a % 10;
		a= (a-rem)/10;
		sum=(sum*10)+rem

    }
	
	
	if(sum==x){
	
	       document.write(`${x} is palindrome`)	
	}
	
	else{
		 document.write(`${x} is not a palindrome`)
	}
	