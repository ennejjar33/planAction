let notes = [10, 8, 16, 20, 13, 18, 9, 5, 20, 15]

noteMoyenne()
noteMeilleure()
noteSuperieures()
moyenneSupérieure()

function noteMoyenne() {
    let moyenne = 0
    let sum = 0
    for (let i=0; i<notes.length; i++) {
        sum += notes[i]
    
    } moyenne = sum / notes.length
    console.log(`Le moyenne de classe c'est ${moyenne}`); 
    return moyenne
} 

function noteMeilleure (){
    let max = 0
     for (let i=0; i<notes.length; i++) {
        if(max< notes[i]){
            max = notes[i]
        }
     }console.log(`La meilleure note en classe c'est ${max}`)
}

function noteSuperieures (){
    let number = 0
    for (let i=0; i<notes.length; i++) {
        if( notes[i] >= 10){
            number ++
        }
    }console.log(`Les notes supérieures ou égales à 10 c'est: ${number}`);
    
}

function moyenneSupérieure(){
    let moyenne = noteMoyenne()
    console.log(moyenne); 
    if( moyenne >= 10){
        console.log("la moyenne de la classe est supérieure ou égale à 10.");    
    } else {
        console.log("la moyenne de la classe est inferieur ou égale à 10.");    
    }
} 