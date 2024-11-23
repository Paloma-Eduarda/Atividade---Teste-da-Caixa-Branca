import determinarTriangulo from "../src/Triangulo";

describe('Teste da função determinarTriangulo', () => {
    test('Não é um triângulo válido (lado inválido)', () => {
        expect(determinarTriangulo(0, 0, 0)).toBe("Não é um triângulo válido");
        expect(determinarTriangulo(-1, 5, 5)).toBe("Não é um triângulo válido");
    });

    test('Triângulo equilátero', () => {
        expect(determinarTriangulo(3, 3, 3)).toBe("Triângulo equilátero");
    });

    test('Triângulo isósceles', () => {
        expect(determinarTriangulo(5, 5, 3)).toBe("Triângulo isósceles");
        expect(determinarTriangulo(5, 3, 5)).toBe("Triângulo isósceles");
        expect(determinarTriangulo(3, 5, 5)).toBe("Triângulo isósceles");
    });

    test('Triângulo escaleno', () => {
        expect(determinarTriangulo(3, 4, 5)).toBe("Triângulo escaleno");
    });
});