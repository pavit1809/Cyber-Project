function checkc(ch){
   var charcode=ch[0].charCodeAt(0);
   return (charcode>=65 && charcode<=90);
}
function checks(ch){
   var charcode=ch[0].charCodeAt(0);
   return (charcode>=97 && charcode<=122);
}
function checkn(ch){
   var charcode=ch[0].charCodeAt(0);
   return (charcode>=48 && charcode<=57);
}
var A3=[5,42,59,61,21,18,44,10,31,35,32,23,30,19,43,22,40,48,47,9,58,26,25,2,24,37,53,13,15,6,12,39,8,3,1,38,52,34,41,57,28,50,4,14,11,46,55,54,20,27,56,62,29,17,7,51,0,60,49,45,16,33,36];
var B3=[11,12,4,27,10,61,21,38,34,25,35,29,22,9,0,56,44,39,32,52,23,55,49,54,13,5,3,41,42,2,51,50,40,48,14,33,20,19,15,60,16,26,47,7,31,28,36,43,58,62,6,17,53,46,45,1,30,24,37,8,57,59,18];
var alpha3=[4,7,13,10,9,23,0,8,22,18,17,19,21,16,6,12,5,3,25,24,15,1,20,11,14,2];
var nums3=[9,4,3,0,7,6,1,8,2,5];
var key3=[];
for(var i=0;i<=62;i++){
   var subkey3=[];
   for(var j=0;j<=62;j++){
      var subsubkey3=[];
      subsubkey3.push(A3[i]);
      subsubkey3.push(B3[i]);
      subkey3.push(subsubkey3);
   }
   key3.push(subkey3);
}
var input3="Hello_world";
var n3=input3.length;
var output3="";
for(var i=0;i<(n3/2+(n3%2));i+=2){
   var charcode1=input3[i].charCodeAt(0);
   var charcode2=input3[i+1].charCodeAt(0);
   if (checkc(input3[i]) && checkc(input3[i+1])){
      var row=charcode1-65;
      var col=charcode2-65;
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checkc(input3[i]) && checks(input3[i+1])){
      var row=charcode1-65;
      var col=26+(charcode2-97);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checkc(input3[i]) && checkn(input3[i+1])){
      var row=charcode1-65;
      var col=52+(charcode2-48);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checkc(input3[i]) && (input3[i+1]=='_')){
      var row=charcode1-65;
      var col=62;
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checks(input3[i]) && checks(input3[i+1])){
      var row=26+(charcode1-97);
      var col=26+(charcode2-97);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checks(input3[i]) && checkc(input3[i+1])){
      var row=26+(charcode1-97);
      var col=(charcode2-65);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checks(input3[i]) && checkn(input3[i+1])){
      var row=26+(charcode1-97);
      var col=52+(charcode2-48);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checks(input3[i]) && (input3[i+1]=='_')){
      var row=26+(charcode1-97);
      var col=62;
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checkn(input3[i]) && checkn(input3[i+1])){
      var row=52+(charcode1-48);
      var col=52+(charcode2-48);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checkn(input3[i]) && checkc(input3[i+1])){
      var row=52+(charcode1-48);
      var col=(charcode2-65);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checkn(input3[i]) && checks(input3[i+1])){
      var row=52+(charcode1-48);
      var col=26+(charcode2-97);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if (checkn(input3[i]) && (input3[i+1]=='_')){
      var row=52+(charcode1-48);
      var col=62;
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if ((input3[i]=='_') && checkc(input3[i+1])){
      var row=62;
      var col=(charcode2-65);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if ((input3[i]=='_') && checks(input3[i+1])){
      var row=62;
      var col=26+(charcode2-97);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
   if ((input3[i]=='_') && checkn(input3[i+1])){
      var row=62;
      var col=52+(charcode2-48);
      var nrow=key3[row][col][0];
      var ncol=key3[row][col][1];
      output3+=getchar(nrow);
      output3+=getchar(ncol);
   }
}
if (n3%2==1){
   var charcode=input3[n3-1].charCodeAt(0);
   if (checkc(input3[n3-1])){
      var pos3=charcode-65;
      var nch3=String.fromCharCode(65+alpha3[pos3]);
      output3+=nch3;
   }
   if (checks(input3[n3-1])){
      var pos3=charcode-97;
      var nch3=String.fromCharCode(97+alpha3[pos3]);
      output3+=nch3;
   }
   if (checkn(input3[n3-1])){
      var pos3=charcode-48;
      var nch3=String.fromCharCode(48+nums3[pos3]);
      output3+=nch3;
   }
   if (input3[n3-1]=='_'){
      output3+='#';
   }
   console.log(output3);
}
