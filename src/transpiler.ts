import fs from "fs";
import { tokenize } from "./lexer";
import { parse } from "./parser";
import { generateJS } from "./generator";

const code = fs.readFileSync("./examples/input.sim", "utf-8");

const tokens = tokenize(code);
const ast = parse(tokens);
const js = generateJS(ast);

fs.writeFileSync("./examples/output.js", js);
console.log("✅ Código gerado com sucesso em ./examples/output.js");
