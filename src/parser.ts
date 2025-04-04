import { ASTNode, Token } from "./types";

export function parse(tokens: Token[]): ASTNode[] {
    const ast: ASTNode[] = [];
    let i = 0;

    while (i < tokens.length) {
        const token = tokens[i];

        if (token.type === "LET") {
            const name = tokens[++i].value;
            i++; // skip colon
            const varType = tokens[++i].value;
            i++; // skip equals
            const value = tokens[++i].value;
            i++; // skip semicolon

            ast.push({ type: "VariableDeclaration", name, varType, value });
        } else if (token.type === "PRINT") {
            const expression = tokens[++i].value;
            i++; // skip semicolon

            ast.push({ type: "PrintStatement", expression });


        } else if (token.type === "SEMICOLON") {
            i++;

        }
        else {
            throw new Error(`Unexpected token: ${token.value}`);
        }
    }

    return ast;
}
