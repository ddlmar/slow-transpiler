export type Token = { type: string; value: string };

export type ASTNode =
    | { type: "VariableDeclaration"; name: string; varType: string; value: string }
    | { type: "PrintStatement"; expression: string };
