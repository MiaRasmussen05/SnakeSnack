let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const currentPageElement = document.getElementById(`page${pageNumber}`);
    currentPageElement.classList.add('active');
}

function showButtons() {
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    prevButton.style.display = currentPage === 1 ? 'none' : 'block';

    nextButton.style.display = currentPage === totalPages ? 'none' : 'block';
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        showButtons();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        showButtons();
    }
}

showPage(currentPage);
showButtons();