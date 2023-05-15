const arrLength = prompt('Please, enter count os numbers');
let arrNumbers = [];
	for(let i = 0; i < arrLength; i++){
      arrNumbers.push(prompt("Enter a number"));
      }  
console.log(arrNumbers);

function compareNumeric(a, b){
	if (typeof a === 'number' && typeof b === 'number') {
	  return a - b;
	}
	if (typeof a === 'number' && typeof b === 'string') {
	  return -1;
	}
	if (typeof a === 'string' && typeof b === 'number') {
	  return 1;
	}
	if (typeof a === 'string' && typeof b === 'string') {
	  if (a < b) return -1;
	  else return 1;
	}
	return 0;
  }
  arrNumbers.sort(compareNumeric);
  
  const arrSortNumbers = arrNumbers.join(', ');
  console.log(arrSortNumbers);
  
  let arrNewNumber = arrSortNumbers.split(', ');
    console.log(arrNewNumber);

	if (arrNewNumber.length >= 4) {
		arrNewNumber.splice(1, 3);
   		console.log(arrNewNumber);
	} else {
   		 console.log('error')
    }


