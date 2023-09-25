// // chapter # 21     Changing case

// // // Question # 01
// var allLower = userInput.toLowerCase();

// // Question # 02

// var x = "Sabih baig".toLowerCase();
// alert(x)

// // Question # 03

// var y = "Sabih baig".toLowerCase();
// alert(y)

// // Question # 04

// var firstvar = "Muhammad Sabih Baig"
// var secondvar = firstvar.toLowerCase();
// alert(secondvar)

// // Question # 6

// var y = "Muhammad Sabih Baig".toLowerCase();
// alert(y)

// // Question # 7

// var CityArr = ["karachi", "islamabad", "lahore", "peshawar"];


//     var userInput = prompt("Where do you live");
    
//     var firstChar = userInput.slice(0, 1)  
//     var remainChar = userInput.slice(1);

//     var combineInput = firstChar + remainChar;

//     for (var i = 0; i < CityArr.length; i++); {
//         if (combineInput === CityArr[i]) {
//             console.log("Match")
           
//         }
//     else {
//         console.log("Not Match")
//     }
// }

// // CHAPTER # 22-25 (Strings)

// // Question # 01

// var sameWord = "captain"
// var extract = sameWord.slice(1,3);
// alert(extract)

// // Question # 02

// var text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam labore necessitatibus"
// var wordCount = text.length;
// alert(wordCount)

// // Question # 03

// var animal = "elephant"
// var extractElephant = animal.slice(2,6);
// alert(extractElephant)

// // Question # 04

// var fullName = "Muhammad Sabih Baig"
// var length = text.length;
// alert(length)

// // Question # 05

// var mystring = "Co-polit"
// var length = mystring.length
// var newstr = mystring.slice (1,6)
// alert(newstr)

// // Question # 06
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// // What is the value of indx?
// // Ans 3

// // Question # 07
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// // What is the value of indx?
// // Ans is 16

// // Question # 08
// var text = "Standup & lets go for walk"
// var length = text.length

// // Question # 10
// var text =  "abcd"
// var finding = text.charAt[2]
// alert(finding)

// // Question # 11
// var text = "abcdefghijklmnopqrstuvwxyz"
// var cha = text.charAt[9];
// alert(cha)

// // Question # 12
// var str = "abcdefghijklmnopqrstuvwxyz"
// var x = str.charAt(str.length-1);
// alert(x)

// // Question # 13
// var input = "abcdefghijklmnopqrstuvwxyz"
// var cha = input.cha[5];
// alert(cha)

// // Question # 14
// var str = "abcdefghijklmnopqrstuvwxyz";
// if (str.charAt(2) === "c"){
//     alert("Match Found");
// }else{
//     alert("No Match");
// }

// // Chapter # 26 (Rounding Number)

// // Question # 01
// var num = 2.8
// var roundednum = math.round(number);
// alert(roundednum)


// // Question # 02
// var originnum = 4.8
// var roundNum = math.ceil(number);
// alert(roundNum)


// // Question # 03
// var originnum = 1.8
// var roundNum = math.floor(originnum);
// alert(roundNum)

// // Question # 04
// var num = 3.4
// var roundednum = math.round(number);
// alert(roundednum)

// // Question # 05
// var originnum = 6.8
// var roundNum = math.ceil(number);
// alert(roundNum)

// Chapter # 27 (RANDOM NUMBER)

// Question # 01
// var userInput = prompt ("Enter number");
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// console.log( randomNumber(1, 50) );

// Question # 02
// var randonmuber = math.random();


// // Question # 03
// var userInput = prompt ("Enter number");
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);


// Chapter # 28-29 (Converting String)

// // Question # 01
// var str = parsenInt("123");
// alert(typeof(str)+ " " + str)

// // Question # 02

// var str = parsenInt("123");
// alert(typeof(str)+ " " + str)

// // Question # 03
// var str = Num ("12.23232323");
// alert(str)

// // Question # 04
// // by using parseInt

// Question # 05
// var Num = 12.232323 
// Num = Num.toString();  
// alert(typeof(Num)+ "  " + Num);

// Question # 06
// var Num = 42 
// Num = Num.toString();  
// alert(typeof(Num)+ "  " + Num);

// Chapter # 30 (Controlling the length of decimals)

// // Question # 01
// var num = 24.34523456
// var numNew = num.toFixed[4];
// alert(typeof+" " + num);