const jsSkills = document.querySelectorAll(".skills__input[data-js='true']");

const $jsLevelMeter = $('.jslevel__meter');

const jsLevel = () => {
	const checkedJsSkills = [...document.querySelectorAll('.skills__input[data-js="true"]:checked')];

	return checkedJsSkills.length * 250;
};

let getJsLevel = jsLevel();

const updateResult = () => {
	getJsLevel = jsLevel();
	$jsLevelMeter.animateNumber(
		{
			number: getJsLevel,
			numberStep(now, tween) {
				const flooredNumber = Math.floor(now);
				const target = $(tween.elem);

				target.text(flooredNumber);
			},
		},
		{
			easing: 'swing',
			duration: 1800,
		},
	);

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
