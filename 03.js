class Vehicule {
  constructor(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }
}

class Voiture extends Vehicule {
  constructor(marque, modele, annee, couleur) {
    super(marque, modele, annee);
    this.couleur = couleur;
  }
  afficherDetails() {
    console.log(this.marque, this.modele, this.annee, this.couleur);
  }
}

let MyCar = new Voiture('Peujeot', '308', '2016', 'Black');

MyCar.afficherDetails();
