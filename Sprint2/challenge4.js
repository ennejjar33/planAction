let produits =[
    {
        id: 1,
        nom: "apple",
        prix: 100,
        categorie : "fruit"
    },
    {
        id: 2,
        nom: "banana",
        prix: 200,
        categorie : "fruit"
    },
    {
        id: 3,
        nom: "tomato",
        prix: 250,
        categorie : "vegetable"
    },{
        id: 4,
        nom: "orange",
        prix: 350,
        categorie : "fruit"
    },{
        id: 5,
        nom: "ananas",
        prix: 50,
        categorie : "fruit"
    },{
        id: 6,
        nom: "batata",
        prix: 100,
        categorie : "vegetable"
    }
]

function produitPrixMoin() {
    let somme = produits.filter(produit => produit.prix < 200);
    console.log(somme);
}
produitPrixMoin()

function produitRecherche() {
    let produitId = 3;
    let recherche = produits.find(produit => produit.id === produitId);
    console.log(recherche);
    
}
produitRecherche() 


function tableauNoms (){
    let noms = produits.map(produit => produit.nom);
    console.log(noms);
}

tableauNoms()

function produitSomme() {
    let sumTotL = produits.reduce((acc, produit) => acc + produit.prix, 0);
    console.log(`la somme des prix de tous les produits c'est: ${sumTotL}`);
}   
produitSomme()