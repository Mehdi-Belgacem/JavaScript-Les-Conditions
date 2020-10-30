let number=(prompt`Indiquer un nombre`)
if(number >= 0 && number < 3){
    alert(`Nul`)
}
else if(number >= 4 && number <= 6){
    alert(`Moyen`)
}
else if(number >= 6 && number <= 8){
    alert(`Assez Bien`)
}
else if(number >= 8 && number <= 9){
    alert(`Bien`)
}
else if(number == 10){
    alert(`Excellent`)
}
else{
    alert(`La valeur indiquer est supérieur a 10`)
}