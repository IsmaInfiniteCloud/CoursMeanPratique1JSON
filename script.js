var person = {
    nom: 'Smith',
    prenom: 'Bob',
    age: 32
};

function afficherProprietesObjets() {
    alert(person.nom + ' ' + person.prenom);

    alert(person.['nom'] + ' ' + person.prenom);


}
