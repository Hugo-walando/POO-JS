class Voiture {
  constructor(marque, modele, annee, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.couleur = couleur;
  }

  afficherDetails() {
    console.log(this.marque, this.modele, this.annee, this.couleur);
  }
}

let MyCar = new Voiture('Audi', 'A1', '2013', 'White');

MyCar.afficherDetails();
