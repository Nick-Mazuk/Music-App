function edge() {
	var size = 10;
	var array = createArray(size);
	printArray(array);
	var finished = false;
	array = fillArray(array);
	console.log("----------------------");
	printArray(array);
	console.log("----------------------");
	for(i = 0; i < size; i++) {
		for(j = 0; j < size; j++) {
			if(array[i][j] == " ") {
				if(i == 0) {
					if(j == 0) {
						if(array[i][j+1] == "$") { //4
							array[i][j+1] = "*";
						}
						if(array[i+1][j+1] == "$") { //5
							array[i+1][j+1] = "*";
						}
						if(array[i+1][j] == "$") { //6
							array[i+1][j] = "*";
						}
					} else if(j == size - 1) {
						if(array[i+1][j] == "$") { //6
							array[i+1][j] = "*";
						}
						if(array[i+1][j-1] == "$") { //7
							array[i+1][j-1] = "*";
						}
						if(array[i][j-1] == "$") { //8
							array[i][j-1] = "*";
						}
					} else {
						if(array[i][j+1] == "$") { //4
							array[i][j+1] = "*";
						}
						if(array[i+1][j+1] == "$") { //5
							array[i+1][j+1] = "*";
						}
						if(array[i+1][j] == "$") { //6
							array[i+1][j] = "*";
						}
						if(array[i+1][j-1] == "$") { //7
							array[i+1][j-1] = "*";
						}
						if(array[i][j-1] == "$") { //8
							array[i][j-1] = "*";
						}
					}

				} else if(i == size - 1) {
					if(j == 0) {
						if(array[i-1][j] == "$") { //2
							array[i-1][j] = "*";
						}
						if(array[i-1][j+1] == "$") { //3
							array[i-1][j+1] = "*";
						}
						if(array[i][j+1] == "$") { //4
							array[i][j+1] = "*";
						}
					} else if(j == size - 1) {
						if(array[i-1][j-1] == "$") { //1
							array[i-1][j-1] = "*";
						}
						if(array[i-1][j] == "$") { //2
							array[i-1][j] = "*";
						}
						if(array[i][j-1] == "$") { //8
							array[i][j-1] = "*";
						}
					} else {
						if(array[i-1][j-1] == "$") { //1
							array[i-1][j-1] = "*";
						}
						if(array[i-1][j] == "$") { //2
							array[i-1][j] = "*";
						}
						if(array[i-1][j+1] == "$") { //3
							array[i-1][j+1] = "*";
						}
						if(array[i][j+1] == "$") { //4
							array[i][j+1] = "*";
						}
						if(array[i][j-1] == "$") { //8
							array[i][j-1] = "*";
						}
					}
				} else if(j == 0) {
					if(array[i-1][j] == "$") { //2
						array[i-1][j] = "*";
					}
					if(array[i-1][j+1] == "$") { //3
						array[i-1][j+1] = "*";
					}
					if(array[i][j+1] == "$") { //4
						array[i][j+1] = "*";
					}
					if(array[i+1][j+1] == "$") { //5
						array[i+1][j+1] = "*";
					}
					if(array[i+1][j] == "$") { //6
						array[i+1][j] = "*";
					}
				} else if(j == size - 1) {
					if(array[i-1][j-1] == "$") { //1
						array[i-1][j-1] = "*";
					}
					if(array[i-1][j] == "$") { //2
						array[i-1][j] = "*";
					}
					if(array[i+1][j] == "$") { //6
						array[i+1][j] = "*";
					}
					if(array[i+1][j-1] == "$") { //7
						array[i+1][j-1] = "*";
					}
					if(array[i][j-1] == "$") { //8
						array[i][j-1] = "*";
					}
				} else {
					if(array[i-1][j-1] == "$") { //1
						array[i-1][j-1] = "*";
					}
					if(array[i-1][j] == "$") { //2
						array[i-1][j] = "*";
					}
					if(array[i-1][j+1] == "$") { //3
						array[i-1][j+1] = "*";
					}
					if(array[i][j+1] == "$") { //4
						array[i][j+1] = "*";
					}
					if(array[i+1][j+1] == "$") { //5
						array[i+1][j+1] = "*";
					}
					if(array[i+1][j] == "$") { //6
						array[i+1][j] = "*";
					}
					if(array[i+1][j-1] == "$") { //7
						array[i+1][j-1] = "*";
					}
					if(array[i][j-1] == "$") { //8
						array[i][j-1] = "*";
					}
				}
			}
		}
	}

	for(i = 0; i < size; i++) {
		for(j = 0; j < size; j++) {
			if(array[i][j] == "$") {
				array[i][j] = " ";
			}
		}
	}
	printArray(array);
}

function createArray(size) {
	var array = [];
	for(i = 0; i < size; i++) {
		array[i] = [];
		for(j = 0; j < size; j++) {
			if(Math.random() < 0.5) {
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

function fillArray(array) {
	var size = array.length;
	var done = false;
	var time1 = new Date();
	var StartTime = time1.getTime();
	while(!done) {
		done = true;
		for(i = 0; i < size; i++) {
			for(j = 0; j < size; j++) {
				if(j == 0) {
					if(i == 0) {
						if(array[i][j+1] == "$" && array[i+1][j+1] == "$" && array[i+1][j] == "$" && array[i][j] == " ") {
							array[i][j] == "$";
							done = false;
						} else if(array[i][j+1] == " " && array[i+1][j+1] == " " && array[i+1][j] == " " && array[i][j] == "$") {
							array[i][j] == " ";
							done = false;
						}
					} else if(i == size - 1) {
						if(array[i][j+1] == "$" && array[i-1][j+1] == "$" && array[i-1][j] == "$" && array[i][j] == " ") {
							array[i][j] == "$";
							done = false;
						} else if(array[i][j+1] == " " && array[i-1][j+1] == " " && array[i-1][j] == " " && array[i][j] == " $") {
							array[i][j] == " ";
							done = false;
						}
					} else {
						var string = "";
						string += array[i-1][j]; //2
						string += array[i-1][j+1]; //3
						string += array[i][j+1]; //4
						string += array[i+1][j+1]; //5
						string += array[i+1][j]; //6

						//counts the number of "hits" around the pixel in question
						var count = 0;
						for(k = 0; k < string.length; k++) {
							if(string.substring(k, k+1) == "$") {
								count++;
							}
						}

						if(count >= 6  && array[i][j] == " ") {
							array[i][j] = "$";
							done = false;
						} else if(count == 0  && array[i][j] == "&") {
							array[i][j] = " ";
							done = false;
						}
					}
				} else if (j == size - 1) {
					if(i == 0) {
						if(array[i][j-1] == "$" && array[i+1][j-1] == "$" && array[i+1][j] == "$" && array[i][j] == " ") {
							array[i][j] == "$";
							done = false;
						} else if(array[i][j-1] == " " && array[i+1][j-1] == " " && array[i+1][j] == " " && array[i][j] == "$") {
							array[i][j] == " ";
							done = false;
						}
					} else if(i == size - 1) {
						if(array[i][j-1] == "$" && array[i-1][j-1] == "$" && array[i-1][j] == "$" && array[i][j] == " ") {
							array[i][j] == "$";
							done = false;
						} else if(array[i][j-1] == " " && array[i-1][j-1] == " " && array[i-1][j] == " " && array[i][j] == "$") {
							array[i][j] == " ";
							done = false;
						}
					} else {
						var string = "";
						string += array[i-1][j-1]; //1
						string += array[i-1][j]; //2
						string += array[i+1][j]; //6
						string += array[i+1][j-1]; //7
						string += array[i][j-1]; //8

						//counts the number of "hits" around the pixel in question
						var count = 0;
						for(k = 0; k < string.length; k++) {
							if(string.substring(k, k+1) == "$") {
								count++;
							}
						}

						if(count == 5 && array[i][j] == " ") {
							array[i][j] = "$";
							done = false;
						} else if(count == 0 && array[i][j] == "$") {
							array[i][j] = " ";
							done = false;
						}
					}
				} else if(i == 0) {
					var string = "";
					string += array[i][j+1]; //4
					string += array[i+1][j+1]; //5
					string += array[i+1][j]; //6
					string += array[i+1][j-1]; //7
					string += array[i][j-1]; //8

					//counts the number of "hits" around the pixel in question
					var count = 0;
					for(k = 0; k < string.length; k++) {
						if(string.substring(k, k+1) == "$") {
							count++;
						}
					}

					if(count == 5 && array[i][j] == " ") {
						array[i][j] = "$";
						done = false;
					} else if(count == 0 && array[i][j] == "$") {
						array[i][j] = " ";
						done = false;
					}

				} else if(i == size - 1) {
					var string = "";
					string += array[i-1][j-1]; //1
					string += array[i-1][j]; //2
					string += array[i-1][j+1]; //3
					string += array[i][j+1]; //4
					string += array[i][j-1]; //8

					//counts the number of "hits" around the pixel in question
					var count = 0;
					for(k = 0; k < string.length; k++) {
						if(string.substring(k, k+1) == "$") {
							count++;
						}
					}

					if(count == 5 && array[i][j] == " ") {
						array[i][j] = "$";
						done = false;
					} else if (count == 0 && array[i][j] == "$") {
						array[i][j] = " ";
						done = false;
					}

				} else { //NOT ON EDGE ________________________________________
					var string = "";
					string += array[i-1][j-1]; //1
					string += array[i-1][j]; //2
					string += array[i-1][j+1]; //3
					string += array[i][j+1]; //4
					string += array[i+1][j+1]; //5
					string += array[i+1][j]; //6
					string += array[i+1][j-1]; //7
					string += array[i][j-1]; //8

					//counts the number of "hits" around the pixel in question
					var count = 0;
					for(k = 0; k < string.length; k++) {
						if(string.substring(k, k+1) == "$") {
							count++;
						}
					}

					if(count >= 6 && array[i][j] == " ") {
						array[i][j] = "$";
						done = false;
					} else if(count == 0 && array[i][j] == "$") {
						array[i][j] = " ";
						done = false;
					} else if(count == 4 && array[i][j] == "$") {
						string += string;
						if(string.indexOf("$ $ $ $ ") != -1) {
							array[i][j] = "$";
						}
					}
				}
			}
		}
		time1 = new Date();
		if(time1.getTime() >= StartTime + 5000) {
			done = true;
		}
	}
	return array;
}