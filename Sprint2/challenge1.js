let produit1 = 400
let quantiteProduit1 = 3
let produit2 = 50
let quantiteProduit2 = 2
let produit3 = 20
let quantiteProduit3 = 1
let sum = (produit1 * quantiteProduit1) + (produit2 * quantiteProduit2) + (produit3 * quantiteProduit3)
let solde = 0
let total = 0
if(sum > 500){
    solde = sum * 0.1
    total = sum - solde
    console.log(`le montant final avec solde est ${total}`)
}else {
    console.log(`le montant final est ${sum}`)
}