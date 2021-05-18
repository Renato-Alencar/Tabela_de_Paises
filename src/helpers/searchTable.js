export function searchTable(arrayObject, voidString) {
    return arrayObject.filter(country => {
        let countryName = country.name.toLowerCase().includes(voidString.toLowerCase())
        let countryCapital = country.capital.toLowerCase().includes(voidString.toLowerCase())

        return countryName || countryCapital
    })
}