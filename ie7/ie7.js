/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'MeshellCoFoodIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-mc-bakingmit': '&#xe600;',
		'icon-mc-wineglass': '&#xe601;',
		'icon-mc-winebottle': '&#xe602;',
		'icon-mc-teapot': '&#xe603;',
		'icon-mc-teacup': '&#xe604;',
		'icon-mc-strainertall': '&#xe605;',
		'icon-mc-strainer': '&#xe606;',
		'icon-mc-steak': '&#xe607;',
		'icon-mc-spoontallholes': '&#xe608;',
		'icon-mc-spoontall': '&#xe609;',
		'icon-mc-spoon': '&#xe60a;',
		'icon-mc-spatulasmall': '&#xe60b;',
		'icon-mc-spatulamedium': '&#xe60c;',
		'icon-mc-spatulalarge': '&#xe60d;',
		'icon-mc-spatulagrill': '&#xe60e;',
		'icon-mc-spatulaflat': '&#xe60f;',
		'icon-mc-saltshaker': '&#xe610;',
		'icon-mc-pretzel': '&#xe611;',
		'icon-mc-pot': '&#xe612;',
		'icon-mc-pizzaslicer': '&#xe613;',
		'icon-mc-pizza': '&#xe614;',
		'icon-mc-pin': '&#xe615;',
		'icon-mc-pan': '&#xe616;',
		'icon-mc-measurecups': '&#xe617;',
		'icon-mc-knifecleaver': '&#xe618;',
		'icon-mc-knifebutch': '&#xe619;',
		'icon-mc-knifebread': '&#xe61a;',
		'icon-mc-knife': '&#xe61b;',
		'icon-mc-kitchenaid': '&#xe61c;',
		'icon-mc-icecream': '&#xe61d;',
		'icon-mc-fork': '&#xe61e;',
		'icon-mc-flour': '&#xe61f;',
		'icon-mc-wisk': '&#xe620;',
		'icon-mc-cuttingboardhandle': '&#xe621;',
		'icon-mc-cuttingboard': '&#xe622;',
		'icon-mc-cupcake': '&#xe623;',
		'icon-mc-crockpot': '&#xe624;',
		'icon-mc-crab': '&#xe625;',
		'icon-mc-chickenthigh': '&#xe626;',
		'icon-mc-cherries': '&#xe627;',
		'icon-mc-chefhat': '&#xe628;',
		'icon-mc-cheese': '&#xe629;',
		'icon-mc-carrot': '&#xe62a;',
		'icon-mc-bread': '&#xe62b;',
		'icon-mc-bowl': '&#xe62c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
