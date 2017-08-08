function encrypt(s){
  var k = s.length;
  var n = 3;
  var b, a,  c;
  
  for(var i=0; i<k; i++){
    b = s.charCodeAt(i);
    a = b + n;
    if(s[i] >= 'a' && s[i] <= 'z'){
        if(a > 122){
          a = 96 + (a % 122); 
        }
      c = String.fromCharCode(a);
      document.write(c);
    }else if(s[i] >= 'A' && s[i] <= 'Z'){
      if(a > 90){
          a = 64 + (a % 90); 
        }
      c = String.fromCharCode(a);
      document.write(c);
    }
    else{
      document.write(s[i]);
    }
  }
}
encrypt("ZaL-zal");