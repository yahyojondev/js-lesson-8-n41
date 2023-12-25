// string 1

// let alifbo =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let n = +prompt("n sonini kiriting");

// let res = " "

// for(i = 1; i <= n; i++){
//     res += alifbo[i]
// }
// console.log(res);

// string 2

// let n = "abc";

// if(typeof n == typeof number ){
//   console.log("digit")
// }else if(typeof n == typeof String){
//     console.log("lotin")
// }else {
//     console.log("0")
// }

// string 3

// let str = "abcsdef";

// console.log(str[1].codePointAt());
// console.log(str[str.length -1].codePointAt());

// str 4

// let N = 5;
// let belgi = "A"
// let res = " "

// for(let i =0; i < N; i++){
//     res += belgi
// }
// console.log(res);

// str 5

// let str = "yaxyojon"
// let res = " ";

// for(let i = str.length - 1; i >= 0; i--){
//     res += str[i]
// }
// console.log(res);

// str 6

// let str = "yahyo";

// let res = str.replaceAll("","*".repeat(5)).trim()
// console.log(res);

// str 7 

// let str = "123fvkedbj";

// let res = 0;

// for(let el of str){
//     if(!isNaN(el)){
//         res ++;
//     }
// }
// console.log(res);

// str 8

// let str = "AkDKJKjdndncxknc";
// let sum = 0;

// for(let el of str){
//     if(el  !== el.toUpperCase()){
//         sum ++
//     }
// }
// console.log(sum);

// str 9

// let str = "KFDKNBVLKCVN";

// let res = str.toLowerCase()
// console.log(res);

// str 10 

// let str = "NABIJONOV yaxyojon"
// let res = "";
// let sum = ""

// for(let el of str){
//     if(el !== el.toLowerCase()){
//         res += el.toLowerCase()
//     }else if(el == el.toLowerCase()){
//         sum += el.toUpperCase()
//     }
// }
// console.log(res + sum);

// str 11

// let str = " 1235238";
//     if(!isNaN == str){
//         console.log("1")
//     }else if( !isNaN(parseFloat(str))){
//         console.log("2")
//     }else {
//         console.log("0")
//     }

// str 12

// let n = 123456;
// let res = ""
// let str = n.toString();

// for (let i = str.length -1 ; i >= 0; i--){
//     res += str[i]
// }
// console.log(+res);

// str 13

// let str = "12 + 13 + 14 - 15";
// let res = eval(str)
// console.log(res);

// str 14

// let N1 = 2;
// let N2 = 3;
// let S1 = "abcsdef"
// let S2 = "lkjmnho"
// let cut1 = S1.slice(0,2)
// let cut2 = S2.slice(-3)
// let res = [cut1 + cut2]
// console.log(res);

// str 15

// let str = "yaxyo"
// let c = "y";
// console.log(str.replaceAll(c,c.repeat(2)));

// str 16

// let s1 = "acbhc"
// let s2 = "dfg"
// let c = "c";

// console.log(s1.replaceAll(c,s2+c));

// str 17

// function getres(s1){

//     let s2 = "abcd"
//     let res = 0;
//      if(s1.includes(s2)){
//         res ++;
//     }
//     return res;
// }
// let get = getres("abcdgfdhabcd")
// console.log(get);

// str 18

// let s1 = "abcdfghr"
// let s2 ="abcd"
// let len1 = s1.length
// let len = s2.length
// if(s1.includes(s2)){
//     console.log(s1.slice(len1-len));
   
// }


// str 19 

//  let s1 = "abcdfghabcdr"
//  let s2 ="abcd"
//   console.log(s1.replaceAll(s2,""));

// str 20

// let s1 ="abc123ghj"
// let s2 = "123";
// let s3 = "cde"
// console.log(s1.replace(s2,s3));

// str 21


// let s1 ="abc123gh123j"
// let s2 = "123";
// let s3 = "cde"
// console.log(s1.replaceAll(s2,s3));

// str 22

// let srt = "AVAZ AZIZ SARDOR YARADOR";
// let res = 0;
// let sum = 0;

// for (let el of srt){
//    if( el.startsWith("A")){
//     res ++
//    }else if(el.endsWith("R")){
//     sum++
//    }

// }
// console.log(res);
// console.log(sum);

// str 23

// let srt = "AVAZ AZIZ SARDOR YARADOR";
// let arr = srt.split(" ")
// let res = 0;

// for (let el of srt){
//     if(el.includes("A")){
//         res ++;
//     }
// }
// console.log(res);
  

// str 24

// const getMaxOfString = (str) =>{
//     let arr  = str.split(" ")
//     let max = arr[0];
//     for (let el of str){
//         if(el.length > max.length){
//             max = el;
//         }
//     }
//     return max;
// }
// let res = getMaxOfString(" ksdj dfkljnf sfdklnjfd osdljdffkldl")
// console.log(res);


// str 25

// let str = "hdfdkl djlkn dfkb dsjhkb";
// let res = str.replaceAll(" ","\".\"")
// console.log(res);

// str 26

// let str = "bdnj cldn dkjnf klfn";
// let arr = str.split(" ")
// console.log(arr);
// let res = " "

// for(let el of arr){
//     res += (el[0].toLocaleUpperCase() + el[(el.length - 1)])    
// }
// console.log([res])

// str 27

// let str =  [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];

// // let arr = str.split("")

// let res = 0;

// for(let el of str){
//     res ++
// }
// console.log(3*res);

// str 28

// let str =  "D:/Qudrat_c++/books/My_book.exe"

// let arr = str.split("/");

// let end = arr[3]
// let srt = end.split(".")
// console.log(srt[0]);

// srt 29


// let str =  "D:/Qudrat_c++/books/My_book.exe"

// let arr = str.split("/");

// let end = arr[3]
// let srt = end.split(".")
// console.log(srt[1]);

// str 30

// let str =  "D:/Qudrat_c++/books/My_book.exe"

// let arr = str.split("/");

// let end = arr[3]
// let srt = end.split(".")
// let fayl = srt[0];

// let pap = fayl.split("_");
// console.log(pap[1]);
// if(pop[1]==0){
//     console.log("/")
// }











