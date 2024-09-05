function anoBissexto (year) {
    return !(year % 4) ? 'Ano Bissexto' : 'Ano não Bissexto'
}

while (true) {
    const year = Number(prompt('Digite um ano: '))

    if (!year) continue

    alert(anoBissexto(year))
    break
}