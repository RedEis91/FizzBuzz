var openTag="<div class='FB'>"
var closeTag="</div>"
for (i=1; i <= 100; i++){
document.write(openTag);
if(i%3===0 && i%5===0) {document.write("fizzbuzz")};
if(i%3===0 && i%5!==0) {document.write("fizz")};
  if(i%5===0 && i%3!==0) {document.write("buzz")};
  if(i%3!==0 && i%5!==0) {document.write(i)};
     document.write(closeTag);
}
