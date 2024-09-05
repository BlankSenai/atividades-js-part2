function somaDigitos (number) {
    const numArray = String(number).split('')

    let result = 0

    for (let i = 0; i < numArray.length; i++) {
        result += Number(numArray[i])
    }

    return result
}

while (true) {
    const number = Number(prompt('Digite um número de mais de um digito: '))

    if (!number || number < 10) continue

    alert(somaDigitos(number))
    break
}