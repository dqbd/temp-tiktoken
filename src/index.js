import { get_encoding, init } from "tiktoken/init";

async function main() {
  const wasm = fetch('./tiktoken_bg.wasm')
  await init((imports) => WebAssembly.instantiate(wasm, imports));

  const encoding = get_encoding("cl100k_base");
  const tokens = encoding.encode("hello world");
  console.log(tokens, encoding.decode(tokens))
  encoding.free();
}

main();
  
document.body.appendChild(component());