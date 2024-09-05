function converterMinutos (minutes) {
    const hours = Math.floor(minutes / 60)
    const minute = Math.floor(minutes % 60)

    return `${hours}h ${minute}min`
}

while (true) {
    const minutes = Number(prompt('Digite uma quantidade em minutos: '))

    if (!minutes) continue

    alert(converterMinutos(minutes))
    break
}