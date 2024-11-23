import calcularPrecoComDesconto from "../src/CalcularDesconto";

describe('Teste da função calcularPrecoComDesconto', () => {
    test('Valor de compra abaixo de 100 (sem desconto)', () => {
        expect(calcularPrecoComDesconto(50)).toBe('50.00');
    });

    test('Valor de compra entre 100 e 499.99 (10% de desconto)', () => {
        expect(calcularPrecoComDesconto(100)).toBe('90.00');
        expect(calcularPrecoComDesconto(499.99)).toBe('449.99');
    });

    test('Valor de compra entre 500 e 999.99 (15% de desconto)', () => {
        expect(calcularPrecoComDesconto(500)).toBe('425.00');
        expect(calcularPrecoComDesconto(999.99)).toBe('849.99');
    });

    test('Valor de compra a partir de 1000 (20% de desconto)', () => {
        expect(calcularPrecoComDesconto(1000)).toBe('800.00');
    });
});