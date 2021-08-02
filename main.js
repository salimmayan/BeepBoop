//Question #1: Turning Strings to URLs
TurningStringToURL("Jasmine Ann Jones");

function TurningStringToURL(enteredInput) {
    const myCharArray = enteredInput.split(" ");
    let output = "";
    for (var i = 0; i < myCharArray.length; i++) {
        if (i === myCharArray.length - 1) {
            output += myCharArray[i];
        }
        else {
            output += myCharArray[i] + "%20";
            // console.log("i am in-1 " + myCharArray[i]);
        }

    }
    return output;
}


//Question #1: Turning Strings to URLs (Recursion)
TurningStringToURL_Recursion("Jasmine Ann Jones");

function TurningStringToURL_Recursion(inputString) {
    const wordArray = inputString.split(" "); //in RECURTION call, "inputString" is "newString" (getting a new array each time)
    const wordArrayLength = wordArray.length;
    // console.log("COMMON: wordArray is " + wordArray + " wordArrayLength is " + wordArrayLength  + " inputString is " + inputString); //each time last element is removed
    if (wordArrayLength === 1) {
        console.log("BASE: inputString is " + inputString);
        return inputString;
    } else {
        let currentword = wordArray[wordArrayLength - 1];
        const shortenedArray = wordArray.slice(0, wordArrayLength - 1); //keep removing element at right most location one at a time
        const newString = shortenedArray.join(" ");
        // console.log("RECURSION: currentword is " + currentword + " shortenedArray is " + shortenedArray + " newString is " + newString); //each time last element is removed
        return TurningStringToURL_Recursion(newString) + "%20" + currentword; //call a new array each time
    }
}


//Question #2: Array Deduping (cehck whether curretn element is present in output array and if not push)

//Question #2: Array Deduping
const inputSampleArray = [1,1,2,2,3,4,5,6,7,7,7];
Deduping(inputSampleArray);


function Deduping(inputArray) {
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (outputArray.indexOf(inputArray[i]) === -1) {
            outputArray.push(inputArray[i]);
        }
        else {
            //do nothing
        }
    }
    return outputArray;
}


//Question #2: Array Deduping (Recursion)
const inputArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7];
Deduping_Recursion(inputArray, []);

function Deduping_Recursion(inputArray, tempOutputArray) {
    const inputArrayLength = inputArray.length;
    const outputArray = tempOutputArray;
    let i = 0;
    // console.log("COMMON: inputArrayLength is " + inputArrayLength + " inputArray is " + inputArray + " outputArray " + outputArray); //each time last element is removed
    if (inputArrayLength === 0) {
        // console.log("BASE: outputArray is " + outputArray);
        return outputArray;
    } 
    else {
        const outputArray2 = [];
        if (outputArray.indexOf(inputArray[i]) === -1) {
            tempOutputArray.push(inputArray[i]);
        }
        const newString = inputArray.slice(1);
        // console.log("RECURSION: tempOutputArray is " + tempOutputArray + " newString " + newString); //each time last element is removed        
        return Deduping_Recursion(newString, tempOutputArray); //call a new array each time
    }
}

//Question #2: Array Deduping (using Filter())
const inputSampleArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7];
function NoDuplicate(value, index, inputSampleArray) {
    return inputSampleArray.indexOf(value) === index;
}
const outputArray = inputSampleArray.filter(NoDuplicate);
console.log(outputArray);

//Question #3: Compressing Strings
//Combination of for and while loops - while loop takes control of for loop iterator (i does not go from 0, 1, 2, 3 ...10 instead it is 0, 3, 4, 6, 10 in the case of "aaabccdddda")
//Expected Output: "3ab2c4da"

//Question #3: Compressing Strings
CompressString("aaabccdddda");

function CompressString(inputString)
{
    let outputString = "";
    for(var i = 0; i < inputString.length; i++)
    {
        var count = 1;
        while (i + 1 < inputString.length && inputString.charAt(i) == inputString.charAt(i + 1))
        {
            i++;
            count++;
        }
        if (count ==1) {
            outputString += inputString.charAt(i) + "";
        }
        else {
             outputString += count + inputString.charAt(i) + "";
        }
       
        // console.log(count + " " + inputString.charAt(i) + "");
    }
    return outputString;
}


//Question #3: Compressing Strings (Recursion)
CompressString_Recursion("aaabccdddda");

function CompressString_Recursion(inputString) {
    const charArray = inputString.split(""); //in RECURTION call, "inputString" is "newString" (getting a new array each time)
    const charArrayLength = charArray.length;
    let i = 0;
    // console.log("COMMON: charArray is " + charArray + " charArrayLength is " + charArrayLength  + " inputString is " + inputString); //each time last element is removed
    if (charArrayLength === 1) {
        // console.log("BASE: inputString is " + inputString);
        return charArray;
    } else {
        var count = 1;
        let temp = inputString.charAt(i);
        while (i + 1 < charArrayLength && inputString.charAt(i) == inputString.charAt(i + 1))
        {
            i++;
            count++;
        }
        const newString = inputString.slice(count);
        // console.log("RECURSION: newString is " + newString + " count is " + count + " inputString.charAt(i) is " + temp); //each time last element is removed
        if (count ==1) {
            return inputString.charAt(i) + "" + CompressString_Recursion(newString); //call a new array each time
        }
        else {
            return count + "" + inputString.charAt(i) + "" + CompressString_Recursion(newString); //call a new array each time
        }
        
    }
}


//Question #4: Checking for Uniqueness
//Set in ES6 JS can only contain unique elements. When you pass an array as argument to set constructor, duplicates will be removed.


//Question #4: Checking for Uniqueness
CheckForUniqueness("hello");
CheckForUniqueness("copyright");

function CheckForUniqueness(inputString)
{    
    var setstring = new Set(inputString); //inputString   
    if (setstring.size == inputString.length)  // A value in the Set may only occur once. If length of set is equal to len of string then it will have unique characters
    {
        console.log(setstring.size + " " + inputString.length);
        console.log(setstring);
        return true
    }
    else
    {
        console.log(setstring.size + " " + inputString.length);
        console.log(setstring);
        return false
    }
}


//Question #5: Array Sorting (Bubble sort())
//Outer loop for 6 elements is 5 passes. 
//With every pass on the array, the array will be divided into two parts, one part will be the sorted part and another part will be unsorted part. After 2 passes, the part of the array from index 4 till 5 is sorted and the part of the array from index 0 till 3 is unsorted. With each pass, the largest element in the unsorted half will bubble up to the highest index in the unsorted half. So, in 3rd pass, number 4 should bubble up to position 3, at index 3. 
//Remembering that index number is from 0 to n-1 (when n is lenght of array), Inner loop is from 0 to n-2 and not 0 to n-1: If Inner loop Index's are from 0 to n-1 then there is a problem. Do a number of passes (We will run inner loop from 0 to n-1. Let's say n is the number of elements in an array and if A[i], the element at position i, is greater than element at position i+1, we will swap the two elements. There is one minor bug here, if i=n-1, it will be the last index, so there will be no element after that. So, we will not be able to access A[i+1], so we will run this loop only till n-2. We don't want to access an index that will be out of the bound of the array, out of the range of the array. For i=n-1, A[i+1] would have been out of range)
//There is no point passing through the sorted part because there will be no swapping in that part. For first pass we can run this inner loop till n-2, for the second pass we can run this inner loop till n-3 and we will be good. For the third pass, we can only run till n-4 and so on. So, in general we can run the loop till n-k-1, so when k is 1, we can run till n-2, when k is 2, we will run till n-3 and so on. This is some improvement


//Question #5: Array Sorting (Bubble sort())
const unsortedArray = [2,7,4,2,5,3];

BubbleSort(unsortedArray);

function BubbleSort(inputArray) {
    let size = inputArray.length;  //so if array has 3 elements then n would be 3
    // console.log(size);
    for (let k =1; k < size; k++) {  //if array size if 6, do 5 passes
        for (let i =0; i <= size - k -1; i++) { //0 to n-2; 1st pass 0 to 4 (5 iterations); 2nd pass 0 to 3 (4 iterations) ....
            if (inputArray[i]>inputArray[i+1])  //when I see indexes i and i+1, should immediately click that we are talking about adjacent elements
            {
                let temp = inputArray[i+1];
                inputArray[i+1] = inputArray[i];
                inputArray[i] = temp; 
            }
        }
        // console.log(`Array at end of Pass ${k} is ${inputArray}`);
    }
    return inputArray;
}

