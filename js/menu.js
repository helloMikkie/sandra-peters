const toggleTag = document.querySelector(".menu-toggle");
const navTag = document.querySelector("nav");

const accordion = document.querySelectorAll(".accordionButton");
const panels = document.querySelectorAll(".panel");

toggleTag.addEventListener("click", function() {
	navTag.classList.toggle("open");

	// Check ob Klasse vergeb, um Text und Bild zu ändern
	if (navTag.classList.contains("open")) {
		toggleTag.style.backgroundImage = "url(images/icons/close.svg)"
		
	} else {
		toggleTag.style.backgroundImage = ""
	}
});

accordion.forEach(tag => {
	tag.addEventListener("click", function() {
		const thisPanel = this.nextElementSibling;
		const isOpen = thisPanel.style.maxHeight;

		panels.forEach(myPanel => {
			myPanel.style.maxHeight = "";
		});

		if (!isOpen) {
			thisPanel.style.maxHeight = thisPanel.scrollHeight + "%";
		}
	});
});
