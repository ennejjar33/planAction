let IDapprenant = 1
let apprenants = [{
    id: IDapprenant++,
    nom: "mohamed",
    age: 15,
    note: 10
}, {
    id: IDapprenant++,
    nom: "aicha",
    age: 16,
    note: 18
}, {
    id: IDapprenant++,
    nom: "noura",
    age: 14,
    note: 13
}, {
    id: IDapprenant++,
    nom: "yassin",
    age: 17,
    note: 9
}, {
    id: IDapprenant++,
    nom: "abdellah",
    age: 18,
    note: 17
}
]

let apprenant = {
    id: IDapprenant++,
    nom: "sara",
    age: 15,
    note: 17
}
apprenants.push(apprenant)



function apprenantModifier() {
    let apprenantId = 6
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenantId == apprenants[i].id) {
            apprenants[i].note = 20
            return
        }
    }
    console.log("apprenant non trouvé")

}

apprenantModifier()

function apprenamtSupprimer() {
    let apprenantId = 5
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenantId == apprenants[i].id){
            apprenants.splice(i, 1)
            return
        }
    }
    console.log("apprenant non trouvé")
}
apprenamtSupprimer()

function apprenantRechercher() {
    let apprenantNom = "nour"
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenantNom == apprenants[i].nom){
            console.log(apprenants[i])
            return
        }
    }
    console.log("apprenant non trouvé")
}
apprenantRechercher()