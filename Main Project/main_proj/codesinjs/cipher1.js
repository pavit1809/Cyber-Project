var alpha=[4,7,13,10,9,23,0,8,22,18,17,19,21,16,6,12,5,3,25,24,15,1,20,11,14,2];
var nums=[9,4,3,0,7,6,1,8,2,5];
var message="Pavitra";
var cipheredtext="";
for(var i=0;i<message.length;i++){
   //next line of code for getting ascii value of a character;
   var charcode=message[i].charCodeAt(0);
   if (charcode>=65 && charcode<=90){
      var pos=charcode-65;
      var newc=String.fromCharCode(65+alpha[pos]);
      cipheredtext+=newc;
   }
   else if (charcode>=97 && charcode<=122)
   {
      var pos=charcode-97;
      var newc=String.fromCharCode(97+alpha[pos]);
      cipheredtext+=newc;
   }
   else if (charcode>=48 && charcode<=57)
   {
      var pos=charcode-48;
      var newc=String.fromCharCode(48+nums[pos]);
      cipheredtext+=nch;
   }
   else if (charcode==32)
   {
      cipheredtext+='#';
   }
}
console.log(cipheredtext);