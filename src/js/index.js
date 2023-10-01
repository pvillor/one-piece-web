const buttons = document.querySelectorAll(".botao");
const characters = document.querySelectorAll(".personagem");

buttons.forEach((btn, index) => {
	btn.addEventListener("click", () => {
		deselectButton(btn);
		deselectCharacter(index);
	});
});

const deselectCharacter = (index) => {
	const currentSelectedChar = document.querySelector(".personagem.selecionado");
	characters[index].classList.add("selecionado");
	currentSelectedChar.classList.remove("selecionado");
};

const deselectButton = (btn) => {
	const currentSelectedBtn = document.querySelector(".botao.selecionado");
	btn.classList.add("selecionado");
	currentSelectedBtn.classList.remove("selecionado");
};
