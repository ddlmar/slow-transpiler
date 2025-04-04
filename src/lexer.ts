import { Token } from "./types";

export function tokenize(code: string): Token[] {
    const tokens: Token[] = [];
    const tokenRegex = /\s*(let|print|\d+|"[^"]*"|:|=|;|[a-zA-Z_]\w*)\s*/g;
    let match: RegExpExecArray | null;

    while ((match = tokenRegex.exec(code)) !== null) {
        const value = match[1];
        let type = "IDENTIFIER";

        if (value === "let") type = "LET";
        else if (value === "print") type = "PRINT";
        else if (value === ":") type = "COLON";
        else if (value === "=") type = "EQUALS";
        else if (value === ";") type = "SEMICOLON";
        else if (/^\d+$/.test(value)) type = "NUMBER";
        else if (/^".*"$/.test(value)) type = "STRING";

        tokens.push({ type, value });
    }

    return tokens;
}
