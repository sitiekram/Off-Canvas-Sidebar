const hamburgerEl=document.querySelector(".hamburger");
const navEl=document.querySelector(".nav");
const contentEl=document.querySelector(".content");
const spanEl=document.getElementsByTagName("span");

function changeHamburger()
{
	navEl.classList.toggle("open");
	contentEl.classList.toggle("shift");
    animateHamburgers();
}
function animateHamburgers()
{
	 for(var item of spanEl)
	{
	   item.classList.toggle("change");
	}

}

hamburgerEl.addEventListener("click",changeHamburger);