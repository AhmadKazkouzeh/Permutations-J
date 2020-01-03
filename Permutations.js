/* 
The following function returns all permutations that can be found 
of any giving string input in descending order.
*/

function solution(input) {
    var output = []; // Empty array for the results 
    var intInput = input.replace(/\D/g, '').split('').sort((a, b) => b - a).join('');    //remove all letters and special characters, then convert to an array, sort descendingly, then convert back to a string. 
    if (intInput.length === 0) { 
        return "No numbers found. Input must contain at least a number"; // end the function
    } else {
        if (intInput.length === 1) { //if input is one char then output the result
            output.push(intInput);
            return output;
          }
        for (var i = 0; i < intInput.length; i++) { // lopping through input string
            var permutations = solution(intInput.substring(0, i) + intInput.substring(i + 1));
            for (var b = 0; b < permutations.length; b++) { 
                output.push(intInput[i] + permutations[b]);//push processed numbers to output array
            }
        }
       return output;
    }
}
console.log(solution('326'));
console.log(solution('A 3B2 C6D')); 
