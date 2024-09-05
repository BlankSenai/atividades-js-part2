function contarLetras (string) {
    return string.length
}

while (true) {
    const string = prompt('Digite um texto: ').replace(/\s/g, "")

    if (!string) continue

    alert(contarLetras(string))
    break
}