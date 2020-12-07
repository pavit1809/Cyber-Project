function generate(size){
   function random_item(list){
      return list[Math.floor(Math.random()*list.length)];
   }
   function shuffleArray(arra1) {
      var ctr = arra1.length, temp, index;
      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
      }
      return arra1;
   }
   var items=['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '\\', ']', '[', '|', '}', '"', "'", ':', ';', '?', '/', '>', '.', '<', ',' , '{'];
   //for time being i am taking the length of password to be 8
   size=parseInt(size);
   //no of passwords=5;
   var counter=1;
   var allpasswords=[];
   items=shuffleArray(items);
   var listshuffled=shuffleArray(items);
   var pass="";
   for(var i=0;i<size;i++){
      pass+=(random_item(listshuffled));
   }
   var finalpass=shuffleArray(pass);
   for(var i=0;i<size;i++){
      finalpass=shuffleArray(finalpass);
   }
   return finalpass;
}