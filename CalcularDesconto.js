export default function calcularPrecoComDesconto(valorCompra) {
    let desconto = 0;
    // Aplicar desconto com base no valor da compra
    if (valorCompra >= 100 && valorCompra < 500) {
        desconto = 10; // 10% de desconto para compras entre 100 e 499.99
    } else if (valorCompra >= 500 && valorCompra < 1000) {
        desconto = 15; // 15% de desconto para compras entre 500 e 999.99
    } else if (valorCompra >= 1000) {
        desconto = 20; // 20% de desconto para compras a partir de 1000
    }
    // Calcular o preço final com desconto
    const precoComDesconto = valorCompra * (1 - desconto / 100);
    // Retornar o preço com desconto arredondado para duas casas decimais
    return precoComDesconto.toFixed(2);
}