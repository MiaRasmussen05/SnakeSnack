// Get all elements with data-target attribute
document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (i.e., navigating to another page)

        const targetSectionId = this.getAttribute('data-target');
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            section.style.display = 'none';
        });

        document.querySelector(targetSectionId).style.display = 'block';
    });
});