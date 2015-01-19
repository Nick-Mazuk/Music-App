function edge() {
	printArray(createArray(190));
	
}

function createArray(size) {
	var array = [];
	for(i = 0; i < size; i++) {
		array[i] = [];
		for(j = 0; j < size; j++) {
			if(Math.random() < 0.1) {
				array[i][j] = "$";
			} else {
				array[i][j] = " ";
			}
		}
	}
	return array;
}

function printArray(array) {
	for(i = 0;i < array.length; i++) {
		var string = "";
		for(j=0;j < array.length; j++) {
			string += array[i][j];
		}
		console.log(string);
	}
}