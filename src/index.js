import { getEncoding } from "js-tiktoken";

function component() {
    const element = document.createElement('div');
  
    const enc = getEncoding("cl100k_base");
    element.innerHTML = enc.decode(enc.encode("Hello world")) + " " + enc.encode("Hello world")
  
    return element;
}
  
document.body.appendChild(component());