function repetirString (string, times) {
    let result = ''

    for (let i = 0; i < times; i++) {
        result += string
    }

    return result
}

while (true) {
    const string = prompt('Digite uma palavra: ')

    if(!string) continue

    const times = Number(prompt('Digite a quantidade de vezes à repetir: '))

    if(!times) continue

    alert(repetirString(string, times))
    break
}