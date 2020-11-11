const jsSkills = document.querySelectorAll(".skills__input[data-js='true']");

const jsLevel = () => {
	const checkedJsSkills = [...document.querySelectorAll('.skills__input[data-js="true"]:checked')];

	return checkedJsSkills.length * 250;
};

let getJsLevel = jsLevel();

const updateResult = () => {
	getJsLevel = jsLevel();
	document.getElementById('meter').innerHTML = getJsLevel;

	const skillMeter = Math.round(jsLevel() * 180) / 1000;
	const levelPointer = document.querySelector('.jslevel__pointer');
	levelPointer.style.transform = `translate(-50%, -50%) rotate(${skillMeter}deg)`;
};

updateResult();

jsSkills.forEach((skill) => {
	skill.addEventListener('change', () => {
		updateResult();
	});
});

