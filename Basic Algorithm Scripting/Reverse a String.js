
function reverseString(str) {

    var arr = str.split("");
    //Spliting the string(str) into individual characters and putting all the characters in an array(arr)

    return arr.reverse(arr).join("");
    //In the first function(reverse) we are reversing the array(arr) by passing it as an argument and then in the second function
    //we are joining the array(arr) back again into a string(str) which will then return by the function
}

reverseString("hello");
