function calcularPotencia (num1, num2) {
    return `${num1}^${num2}=${num1**num2}`
}

while (true) {
    const num1 = Number(prompt('Digite a base: '))

    if (!num1) continue

    const num2 = Number(prompt('Digite o exponente: '))

    if (!num2) continue

    alert(calcularPotencia(num1, num2))
    break   
}