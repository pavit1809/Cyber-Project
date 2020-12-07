var input4="harry";
var n4=input4.length;
var noofshifts=Math.ceil(Math.sqrt(n4));
console.log(noofshifts);
var input4final="";
for(var i=noofshifts;i<=n4-1;i++){
   input4final+=input4[i];
}
for(var i=0;i<=noofshifts-1;i++){
   input4final+=input4[i];
}
var output4="";
for(var i=0;i<=n4-1;i++){
   var currpos4=position(input4final[i]);
   currpos4=key4[currpos4];
   output4+=getchar(currpos4);
}
console.log(output4);