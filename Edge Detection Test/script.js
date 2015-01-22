var s = " ";
var m = "$";
var picture = [[m,m,m,s,s,s,s,s,s,s,s,s,m,m,m],[m,m,m,m,s,s,s,s,s,s,s,m,m,m,m],[m,m,m,m,m,s,s,s,s,s,m,m,m,m,m],[m,m,m,m,m,m,s,s,s,m,m,m,m,m,m],[m,m,m,s,m,m,m,m,m,m,m,s,m,m,m],[m,m,m,s,s,m,m,m,m,m,s,s,m,m,m],[m,m,m,s,s,s,m,m,m,s,s,s,m,m,m],[m,m,m,s,s,s,s,s,s,s,s,s,m,m,m]];


function edge() {
	//var array = createArray(2);
	//printArray(array);
	array = picture;
	var time1 = new Date();
	var StartTime = time1.getTime();
	var finished = false;
	var time2 = new Date();
	var endTime = time2.getTime();
	printArray(array);
	console.log("----------------------");
	for(i = 0; i < array.length; i++) {
		for(j = 0; j < array[i].length; j++) {
			if(array[i][j] == "$") {
				if(i == 0) {
					array[i][j] = "*";
				} else if(i == array.length - 1) {
					array[i][j] = "*";
				} else if(j == 0) {
					array[i][j] = "*";
				} else if(j == array[i].length - 1) {
					array[i][j] = "*";
				} else {
					var string = "";
					string += array[i-1][j-1]; //1
					string += array[i-1][j]; //2
					string += array[i-1][j+1]; //3
					string += array[i][j+1]; //4
					string += array[i+1][j+1]; //5
					string += array[i+1][j]; //6
					string += array[i+1][j-1]; //7
					string += array[i][j-1]; //8

					var spaces = 0;
					for(k = 0; k < string.length; k++) {
						if(string.substring(k, k+1) == " ") {
							spaces++;
						} else {
							string = stringReplaceAt(string,k, "*");
						}
					}
					string += string;
					
					if(spaces >= 2 || (string.indexOf("* *") % 2 == 0 && string.indexOf("* *") != -1)) {
						if(string.indexOf(" *** ") % 2 !=0) {
							array[i][j] = "*";
						}
					}
				}
			}
		}
	}
	var time2 = new Date();
	var endTime = time2.getTime();
	console.log(endTime - StartTime);
	printArray(array);
	for(i = 0; i < array.length; i++) {
		for(j = 0; j < array[i].length; j++) {
			if(array[i][j] == "$") {
				array[i][j] = " ";
			}
		}
	}
	console.log("----------------------");
	printArray(array);
	var time2 = new Date();
	var endTime = time2.getTime();
	console.log(endTime - StartTime);
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
		for(j=0;j < array[i].length; j++) {
			string += array[i][j];
		}
		console.log(string);
	}
}

function fillArray(array) {
	var done = false;
	var time1 = new Date();
	var StartTime = time1.getTime();
	var timesLooped = 0;
	while(!done) {
		done = true;
		for(i = 0; i < array.length; i++) {
			for(j = 0; j < array[i].length; j++) {
				if(j == 0) {
					if(i == 0) {
						if(array[i][j+1] == "$" && array[i+1][j+1] == "$" && array[i+1][j] == "$" && array[i][j] == " ") {
							array[i][j] == "$";
							done = false;
						} else if(array[i][j+1] == " " && array[i+1][j+1] == " " && array[i+1][j] == " " && array[i][j] == "$") {
							array[i][j] == " ";
							done = false;
						}
					} else if(i == array.length - 1) {
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
				} else if (j == array[i].length - 1) {
					if(i == 0) {
						if(array[i][j-1] == "$" && array[i+1][j-1] == "$" && array[i+1][j] == "$" && array[i][j] == " ") {
							array[i][j] == "$";
							done = false;
						} else if(array[i][j-1] == " " && array[i+1][j-1] == " " && array[i+1][j] == " " && array[i][j] == "$") {
							array[i][j] == " ";
							done = false;
						}
					} else if(i == array[i].length - 1) {
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

				} else if(i == array.length - 1) {
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
		timesLooped++;
		if(timesLooped > 15) {
			done = true;
		}
	}
	return array;
}

function stringReplaceAt(string,index, character) {
    return string.substr(0, index) + character + string.substr(index+character.length);
}
