let button;
var dictionnaire;
# https://editor.p5js.org/louisnom123/sketches/oKlsWevoZ

function preload() {
    dictionnaire = [
        "123456",
        "123456789",
        "qwerty",
        "password",
        "1234567",
        "12345678",
        "12345",
        "iloveyou",
        "111111",
        "123123",
        "abc123",
        "qwerty123",
        "1q2w3e4r",
        "admin",
        "qwertyuiop",
        "654321",
        "555555",
        "lovely",
        "7777777",
        "welcome",
        "888888",
        "princess",
        "dragon",
        "password1",
        "123qwe"
    ];
}
function setup() {
    createCanvas(450, 200);
    background(0);
    button = createButton('generer');
    button.position(165, 165);
    button.size(120, 35);
    button.mousePressed(genererMDP);
    title(1);
}


// la fonction title permet de gérer le positionnemment du texte Secure Password Generator
function title(x) {
    if (x == 0) {
        textSize(width / 20);
        fill('white');
        text('Secure Password Generator', 215, 15);
        textAlign(CENTER, CENTER);
    }
    else {
        textSize(width / 20);
        fill('white');
        text('Secure Password Generator', 60, 20);
        textAlign(CENTER, CENTER);
    }
}



function genererMDP() {
    let dictionnaireFinal = [];//dictionnaire où il y aura les mots du dictionnaire+des lettres Random
    var nombreDeMotRandom = 2; // génère 2 mot du dictionnaire;
    var tailleRandom; //nombre de lettre random à ajouter après le mot random
    var randIndex;
    const lettreRandom = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var resultat = ""; //resultat final des mots du dictionnaire et des lettres Random combinés

    for (let i = 0; i < nombreDeMotRandom; i++) {
        randIndex = Math.floor(Math.random() * (dictionnaire).length + 1);
        var motRandom = dictionnaire[randIndex];
        tailleRandom = Math.floor(Math.random() * 4) + 3;
        for (let j = 0; j < tailleRandom; j++) {
            motRandom += lettreRandom.charAt(Math.floor(Math.random() * lettreRandom.length));
        }
        dictionnaireFinal.push(motRandom);

    }

    for (let i = 0; i < dictionnaireFinal.length; i++) {
        resultat = resultat += dictionnaireFinal[i];
    }


    background(0);
    title(0);
    textSize(width / 25);
    fill('gold');
    text(resultat, 215, 95);
    textAlign(CENTER, CENTER);

}