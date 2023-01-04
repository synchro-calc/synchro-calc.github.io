const spellsFR = ["Ralentissement", "Souvenir", "Téléportation", "Retour Spontané", "Rembobinage", "Renvoi", "Frappe de Xélor", "Engrenage", "Gelure", "Perturbation", "Sablier de Xélor", "Distortion Temporelle", "Poussière Temporelle", "Suspension Temporelle", "Raulebaque", "Instabilité Temporelle", "Démotivation", "Pendule", "Paradoxe Temporel", "Faille Temporelle", "Contre", "Bouclier Temporel", "Fuite", "Prémonition", "Désynchronisation", "Glas"]
const spellsEN = ["Slow Down", "Souvenir", "Teleportation", "Spontaneous Return", "Rewind", "Reflect", "Xelor's Punch", "Gear", "Frostbite", "Disruption", "Xelor's Sandglass", "Temporal Distortion", "Temporal Dust", "Temporal Suspension", "Rhol Bak", "Temporal Instability", "Loss of Motivation", "Pendulum", "Temporal Paradox", "Time Rift", "Counter", "Temporal Oop Shield", "Flight", "Premonition", "Desynchronisation", "Knell"]
const spellsALL = [].concat(spellsEN, spellsFR)
// Translation is done using the fixed order of spells
const translate = {}
for (let i=0; i< spellsFR.length; ++i) {
    translate[spellsFR[i]] = spellsEN[i]
}
const variant = {
    'Slow Down': 'Souvenir',
    'Souvenir': 'Slow Down',
    'Teleportation': 'Spontaneous Return',
    'Spontaneous Return': 'Teleportation',
    'Rewind': 'Reflect',
    'Reflect': 'Rewind',
    "Xelor's Punch": 'Gear',
    'Gear': "Xelor's Punch",
    'Frostbite': 'Disruption',
    'Disruption': 'Frostbite',
    "Xelor's Sandglass": 'Temporal Distortion',
    'Temporal Distortion': "Xelor's Sandglass",
    'Temporal Dust': 'Temporal Suspension',
    'Temporal Suspension': 'Temporal Dust',
    'Rhol Bak': 'Temporal Instability',
    'Temporal Instability': 'Rhol Bak',
    'Loss of Motivation': 'Pendulum',
    'Pendulum': 'Loss of Motivation',
    'Temporal Paradox': 'Time Rift',
    'Time Rift': 'Temporal Paradox',
    'Counter': 'Temporal Oop Shield',
    'Temporal Oop Shield': 'Counter',
    'Flight': 'Premonition',
    'Premonition': 'Flight',
    'Desynchronisation': 'Knell',
    'Knell': 'Desynchronisation'
}
const telefrag = {
    'Slow Down': false,
    'Souvenir': true,
    'Teleportation': true,
    'Spontaneous Return': true,
    'Rewind': true,
    'Reflect': true,
    "Xelor's Punch": true,
    'Gear': true,
    'Frostbite': true,
    'Disruption': true,
    "Xelor's Sandglass": false,
    'Temporal Distortion': true,
    'Temporal Dust': true,
    'Temporal Suspension': false,
    'Rhol Bak': true,
    'Temporal Instability': true,
    'Loss of Motivation': false,
    'Pendulum': true,
    'Temporal Paradox': true,
    'Time Rift': true,
    'Counter': false,
    'Temporal Oop Shield': true,
    'Flight': true,
    'Premonition': true,
    'Desynchronisation': true,
    'Knell': false
}
const shortName = {
    'Slow Down': 'Slow',
    'Souvenir': 'Souv',
    'Teleportation': 'TP',
    'Spontaneous Return': 'SR',
    'Rewind': 'RW',
    'Reflect': 'RF',
    "Xelor's Punch": 'Punch',
    'Gear': "Gear",
    'Frostbite': 'FB',
    'Disruption': 'Disrupt',
    "Xelor's Sandglass": 'Sandglass',
    'Temporal Distortion': 'Disto',
    'Temporal Dust': 'Dust',
    'Temporal Suspension': 'Susp',
    'Rhol Bak': 'RB',
    'Temporal Instability': 'Instab',
    'Loss of Motivation': 'LOM',
    'Pendulum': 'Pendulum',
    'Temporal Paradox': 'Paradox',
    'Time Rift': 'Rift',
    'Counter': 'Counter',
    'Temporal Oop Shield': 'Shield',
    'Flight': 'Flight',
    'Premonition': 'Premo',
    'Desynchronisation': 'Desync',
    'Knell': 'Knell'
}


function getBaseName(localisedSpellName) {
    return (localisedSpellName in spellsEN) ? localisedSpellName : translate[localisedSpellName]
}
function getLocalisedName(baseSpellName, localeID) {
    const spellID = spellsEN.findIndex((val) => val===baseSpellName)
    if (spellID === -1) {
        throw new Error("Cannot find spell")
        return "ERROR"
    }
    switch(localeID) {
        case "FR" :
            return spellsFR[spellID]
        case "EN" :
            return spellsEN[spellID]
        default :
            throw new Error("Unexpected locale ID")
            return "ERROR"
    }
}
function getShortName(spell) {
    return shortName[spell]
}
function getVariantOf(spell) {
    return variant[spell] 
}
function canTelefrag(spell) {
    return telefrag[spell]
}
function getImagePath(spell) {
    return `./images/${spell.replace(/ /g, '_')}.png`
}
function extractSpell(string) {
    for (spellName of spellsALL) {
        // try to find the spell's name
        const matchResult = string.match( `^(?<shit> *)(?<spell>${spellName}) ?(?<remaining>.*)$`)
        if (matchResult) {
            return matchResult.groups
        }
        //console.log()
    }
    throw new Error("Unable to extract spell from input string")
}
function parseLayoutString(layoutString) {
    const lines = []
    for (let line of layoutString.split("\n")) {
        // Parse line into array of spells that exist
        let remainingString = line
        const spellsFound = []
        while (remainingString.length > 0 ) {
            try {
            const resultOfExtraction = extractSpell(remainingString)
            spellsFound.push(getBaseName(resultOfExtraction.spell))
            remainingString = resultOfExtraction.remaining
            }
            catch (err) {
                break
            }
        }
        lines.push(spellsFound)
    }
    if (lines[0].length == 0) {lines.shift()}
    if (lines[lines.length-1].length == 0) {lines.pop()}
    return lines
}


function tests() {
    const test = {
        getVariantOf : {args : ["foo", "Souvenir"]},
        getBaseName : {args : ["Téléportation", "Frappe de Xélor"]},
        getLocalisedName : {nargs : 2, args : ["Slow Down", "FR", "Slow Down", "EN", "Xelor's Punch", "FR"]},
        getImagePath : {args : ["Teleportation", "Xelor's Punch", "Loss of Motivation", "Slow Down"]},
        parseLayoutString : {args : ["Téléportation Frappe de Xélor Gelure\\nSouvenir"]}
    }
    for (functionToTest in test) {
        const increment = test[functionToTest].nargs ? test[functionToTest].nargs  : 1
        console.log(`${functionToTest} :`)
        for (let i=0; i < test[functionToTest].args.length; i += increment) {
            if (test[functionToTest].nargs) {
                const argsThisTime = test[functionToTest].args.slice(i,i + increment)
                // Dev Note : holy shit
                const args = argsThisTime.toString().replace(/,/g, "\",\"")
                console.log(`  ("${args}") -> ${JSON.stringify(eval(`${functionToTest}("${args}")`))}`)
            }
            else {
                console.log(`  ${test[functionToTest].args[i]} -> ${JSON.stringify(eval(`${functionToTest}("${test[functionToTest].args[i]}")`))}`)
            }
        }
    }
}
// tests()