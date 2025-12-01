export default function getShadowValue(shadows){
    let finalString = ""

    shadows.forEach(shadow => {
        if(shadow.active){
            shadow.inputs.forEach(shadows => {
                if(shadows.type === "range") finalString += `${shadows.value}px `
                else if(shadows.type === "color") finalString += `${shadows.value}`

            })
            if(shadow.inset) finalString += " inset"

            if(shadows.indexOf(shadow) === shadows.length - 1) finalString += ";"
            else finalString += ","

        }

        
    })

    return finalString
}