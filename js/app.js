/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/





//Define Global Variables
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');


//list loop//
let  c=1;
sections.forEach(section => {
	const sectionID = section.id;
	let list_q = document.createElement("li");
	let a = document.createElement('a');
	let link = document.createTextNode(sectionID);
	a.appendChild(link);
	a.title = sectionID;
	list_q.appendChild(a);
	a.className = "menu__link";
	a.id = c;
	document.getElementById("navbar__list").appendChild(list_q);
	c++;//counter end
});
//list loop//

//scroll loop//
let  b=1;
config = {behavior: 'smooth'};//for scrollIntoView//
sections.forEach(section => {
	let sectionID = section.id;
	sectionID= document.getElementById(sectionID);
	butn = document.getElementById(b);
	butn.addEventListener('click', (event)=>{

	sectionID.scrollIntoView(config);
	})
	b++;//counter end
});
//scroll loop//



/*
my first try
 sec1 = document.getElementById('section1');
 sec2 = document.getElementById('section2');
 sec3 = document.getElementById('section3');
 sec4 = document.getElementById('section4');

but1 = document.getElementById('1');
but2 = document.getElementById('2');
but3 = document.getElementById('3');
but4 = document.getElementById('4');






but1.addEventListener('click', (event)=>{

	sec1.scrollIntoView(config);
})

but2.addEventListener('click', (event)=>{
	sec2.scrollIntoView(config);
})

but3.addEventListener('click', (event)=>{
	sec3.scrollIntoView(config);
})

but4.addEventListener('click', (event)=>{
	event.stopPropagation();
	sec4.scrollIntoView(config);
})

config = {behavior: 'smooth'}
*/
