class Animal {
  faireDuBruit() {
    console.log('Cet animal fait du bruit');
  }
}

class Chat extends Animal {
  faireDuBruit() {
    console.log('Le Chat miaule');
  }
}

class Chien extends Animal {
  faireDuBruit() {
    console.log('Le Chien aboie');
  }
}

const animaux = [new Chien(), new Chat()];

animaux.forEach((animal) => {
  animal.faireDuBruit();
});
