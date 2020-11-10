import {CountUp} from 'countup.js';

const jsSkill = document.querySelector(".skills__input[data-js='true']");

const jsLevel = () => {
	const jsSkills = [...document.querySelectorAll('.skills__input[data-js="true"]:checked')];

	return jsSkills.length * 200;
};

const updateResult = () => {
	const countUp = new CountUp(jsLevel());
	countUp.start();
	document.getElementById('meter').innerHTML = jsLevel();

	const skillMeter = Math.round(jsLevel() * 180) / 1000;
	const levelPointer = document.querySelector('.jslevel__pointer');
	levelPointer.style.transform = ` translate(-50%, -50%) rotate(${skillMeter}deg)`;
};

updateResult();

jsSkill.addEventListener('input', () => {
	updateResult();
});
