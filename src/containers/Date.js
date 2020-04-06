const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

export const DateParser = date => {
    let dateformat = /^(0?[1-9]|1[012])[\/]\d{4}$/;
    
    if(!date.match(dateformat)){
        console.error("The provided date on the JSON doesn't match the required date format: mm/yyyy")
        return null
    }

    let month = parseInt(date.split("/")[0])
    let year = parseInt(date.split("/")[1])

    return months[month - 1] + " " + year
}

export const DateBinary = date => {
    let dateformat = /^(0?[1-9]|1[012])[\/]\d{4}$/;
    
    if(!date.match(dateformat)){
        console.error("The provided date on the JSON doesn't match the required date format: mm/yyyy")
        return null
    }

    return new Date("01/10/2019").getTime()
}