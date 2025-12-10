// info dos Animais
const animals = [
    {name: "Scooby", description: "Scooby é um cão leal e protetor. Ama crianças e é muito obediente. Precisa de espaço para correr e brincar. Ideal para famílias ativas.", img: "./assets/img/Scooby.png"}, 
    {name: "Pantera", description: "Pantera é uma gatinha carinhosa e brincalhona. Ela adora carinho e é muito sociável com outros gatos. Procura uma família que lhe dê muito amor e atenção.", img:"./assets/img/Pantera.png"},
    {name: "Thor", description: "Thor é um cão cheio de energia e lealdade. Adora brincar e estar perto da família, sempre demonstrando carinho e proteção. Procura um lar onde possa receber amor e ter bastante espaço para gastar sua energia.", img: "./assets/img/Thor.png"},
    {name: "Garfield", description: "Garfield é um gato independente mas carinhoso. Gosta de explorar e é muito curioso. Ideal para quem quer um companheiro aventureiro.", img: "./assets/img/Garfield.png"}
]

// captura os botoes de cada animal
const botoes = document.querySelectorAll(".animal-btn");

// itera sobre os botoes adicionando evento a cada um
for (let i = 0 ; i < botoes.length ; i++) {
    console.log(botoes[i]);
    botoes[i].addEventListener("click", () => updateAnimalInfo(botoes[i]));
}

function updateAnimalInfo ( botao ) {
    const id = botao.id;
    console.log(id);

    const animal = animals.find(a => a.name.toLowerCase () === id.toLowerCase ());

    document.querySelector(".animal-info h2").textContent = animal.name;
    document.querySelector(".animal-info p").textContent = animal.description;
    document.querySelector(".animal-image img").src = animal.img;
}