import { ASTNode } from "./types";

export function generateJS(ast: ASTNode[]): string {
    return ast
        .map((node) => {
            if (node.type === "VariableDeclaration") {
                return `let ${node.name} = ${node.value};`;
            } else if (node.type === "PrintStatement") {
                return `console.log(${node.expression});`;
            }
        })
        .join("\n");
}
