function modulo(a,b){
   var answer=(b+(a%b))%b;
   return answer;
}
function modsub(a,b,m){
   return modulo(modulo((modulo(a,m)-modulo(b,m)),m),m);
}
function getchar(coor){
   if (coor==62){
      var ret='_';
      return ret;
   }
   if (coor>=0 && coor<26){
      var ret=String.fromCharCode(65+coor);
      return ret;
   }
   if (coor>=26 && coor<52){
      var ret=String.fromCharCode(97+(coor-26));
      return ret;
   }
   if (coor>=52 && coor<62){
      var ret=String.fromCharCode(48+(coor-52));
      return ret;
   }
   return '!';
}
function pos(ch){
   var charcode=ch[0].charCodeAt(0);
   // console.log(charcode);
   if (ch=='_'){
      return 62;
   }
   if (charcode>=97){
      var ret=26+(charcode-97);
      return ret;
   }
   if (charcode>=48 && charcode<=57){
      var ret=52+(charcode-48);
      return ret;
   } 
   return (charcode-65);
}
var data=[37,19,11,3,16,17,62,18,36,1,31,5,15,25,10,54,4,6,40,45,30,41,14,47,9,28,58,43,8,56,34,24,2,7,49,12,20,35,55,26,39,51,0,61,13,46,23,60,50,27,44,42,29,32,48,57,52,22,38,33,53,59,21];
var shifter=153;
var input2="Hello_world";
var n=input2.length;
var even="",odd="";
for(var i=0;i<=n-1;i++){
   if ((i+1)%2==0){
      even+=input2[i];
   }
   if ((i+1)%2!=0){
      odd+=input2[i]; 
   }
}
var newodd="",neweven="";
for(var i=0;i<=odd.length-1;i++){
   var currpos=pos(odd[i]);
   var newpos=(currpos+shifter)%63;
   var newchar=getchar(data[newpos]);
   newodd+=newchar;
}
for(var i=0;i<=even.length-1;i++){
   var currpos=pos(even[i]);
   var newpos=modsub(currpos,shifter,63);
   var newchar=getchar(data[newpos]);
   neweven+=newchar;
}
var output2="";
var ko=0,ke=0;
for(var i=0;i<=n-1;i++){
   if ((i+1)%2==0){
      output2+=neweven[ke];
      ke+=1;
   }
   if ((i+1)%2!=0){
      output2+=newodd[ko];
      ko+=1;
   }
}
console.log(output2);