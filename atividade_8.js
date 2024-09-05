function calcularMediaPonderada (grades, weight) {
    let result1 = 0
    let result2 = 0

    for (let i = 0; i < 3; i++) {
        result1 += (Number(grades[i]) * Number(weight[i]))
        result2 += Number(weight[i])
    }

    return (result1 / result2).toFixed(1)
}

while (true) {
    const grades = prompt('Digite as três notas: ').split(' ')

    if (grades.length != 3) continue

    const weight = prompt('Digite os pesos das notas respectivamente: ').split(' ')

    if (grades.length != 3) continue

    alert(calcularMediaPonderada(grades, weight))
    break
}