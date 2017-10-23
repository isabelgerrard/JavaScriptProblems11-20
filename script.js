/* Isabel Gerrard
*JavaScript Problems 11-20
* 10/05/2017
*/


function firstLast6(array){
    if(array[0] === 6) {
        return true;
    }

    var arrayTwo = array.reverse();

    return arrayTwo[0] === 6;
}


function has23(array){
    return array[0] == 2 || array[0] == 3 || array[1] == 2 || array[1] == 3;
}



function fix_23(array){
    if(array[0] ==2 && array[1] == 3 || array[1]== 2 && array[2] == 3){
        array[1] = 0;
    }

    return array;
}


function countYZ(string){
    var count = 0;
    var smallStr = string.toLowerCase();
    for (var i = 0; i < smallStr.length; i++) {
        if (smallStr[i] == " "){
            if (smallStr[i-1] == "y" || smallStr[i-1] =="z"){
                count += 1;
            }
        }
    }
    if (smallStr.endsWith("y") || smallStr.endsWith("z")){
        count += 1;
    }

    return count;
}



function endOther(string1, string2){
    var stringOne = string1.toLowerCase();
    var stringTwo = string2.toLowerCase();
    return !!(stringOne.endsWith(stringTwo) || stringTwo.endsWith(stringOne));

}



function starOut(string) {
    var newString = "";
    for (var i = 0; i < string.length; i ++) {
        if(string[i-1] !== "*" && string[i] !== "*" && string[i+1] !== "*"){
            newString += string[i];
        }
    }


    return newString;
}



function getSandwich(string){
    var firstBread = string.indexOf("bread");
    var secondBread = string.lastIndexOf("bread");
    var innerBits = string.slice(firstBread + 5, secondBread);
    if(secondBread === -1 || firstBread === -1){
        innerBits = ""
    }
    return innerBits;
}



function canBalance(array){
    var sumOne = 0;
    var sumTwo = 0;
    for (var i = 0; i < array.length; i++){
        sumOne += array[i];
        for (var j = i+1 ; j< array.length; j++) {
            sumTwo += array[j];
            if (sumOne === sumTwo){
                return true;
            }
        }
    }
    if(sumOne == 0){
        return true;
    } else {
        return false;
    }
}


function countClumps(array){
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if(array[i] == array[i+1] && array[i] != array[i-1]){
            count += 1;
        }
    }

    return count;
}


function evenlySpaced(a, b, c) {
   if(a > b && b > c) {
       var large = a;
       var med = b;
       var small = c;
   }
    if(a > b && c > b){
        var large = a;
        var med = c
        var small = b;
    }
    if(b > a && a > c){
        var large = b;
        var med = a;
        var small = c;
    }
    if(b > a && c > a){
        var large = b;
        var med = b
        var small = a;
    }
    if(c > a && a > b){
        var large = c;
        var med = a;
        var small = b;
    }
    if(c > a && b > a){
        var large = c;
        var med = b
        var small = a;
    }

    var one = large - med;
    var two = med - small;
    return one === two || a - b === b - c;
}




function tester() {
    document.getElementById("firstLastOutput11").innerHTML = firstLast6([6, 1, 2, 3]);
    document.getElementById("has23Output12").innerHTML = has23([3, 8]);
    document.getElementById("fix_23Output13").innerHTML = fix_23([1, 2, 3]);
    document.getElementById("countYZOutput14").innerHTML = countYZ("party hardy");
    document.getElementById("endOtherOutput15").innerHTML = endOther("pineApPle", "APPle");
    document.getElementById("starOutOutput16").innerHTML = starOut("sme*iilly");
    document.getElementById("getSandwichOutput17").innerHTML = getSandwich("xyzabcabc");
    document.getElementById("canBalanceOutput18").innerHTML = canBalance([10, 0, 1, -1, 10]);
    document.getElementById("countClumpsOutput19").innerHTML = countClumps([1, 2, 4, 4, 4, 4, 5, 6, 6, 7, 7]);
    document.getElementById("evenlySpacedOutput20").innerHTML = evenlySpaced(9, 10, 11);


}
