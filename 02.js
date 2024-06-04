class Voiture {
  #marque;
  #modele;
  #annee;
  #couleur;

  constructor(marque, modele, annee, couleur) {
    this.#marque = marque;
    this.#modele = modele;
    this.#annee = annee;
    this.#couleur = couleur;
  }

  set marque(newMarque) {
    this.#marque = newMarque;
  }

  get marque() {
    return this.#marque;
  }

  set modele(newModele) {
    this.#modele = newModele;
  }

  get modele() {
    return this.#modele;
  }

  set annee(newAnnee) {
    this.#annee = newAnnee;
  }

  get annee() {
    return this.#annee;
  }

  set couleur(newCouleur) {
    this.#couleur = newCouleur;
  }

  get couleur() {
    return this.#couleur;
  }

  afficherDetails() {
    console.log(this.marque, this.modele, this.annee, this.couleur);
  }
}

let myCar = new Voiture('Audi', 'A1', '2013', 'White');

myCar.couleur = 'Red';

myCar.afficherDetails();
