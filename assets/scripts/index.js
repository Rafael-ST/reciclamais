if (module.hot) {
    module.hot.accept();
}

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import $ from 'jquery';

// console.log($);



document.addEventListener('DOMContentLoaded', function () {
    console.log("testando dom")
    const studentModal = document.getElementById('studentModal');
    const studentNameElement = document.getElementById('studentName');
    const studentScoreElement = document.getElementById('studentScore');
    const studentPlaceElement = document.getElementById('studentPlace');
    const studentLetterElement = document.getElementById('studentLetter');

    // Add event listener to the Reset button
    const resetButton = document.getElementById('resetSearch');
    resetButton.addEventListener('click', function () {
        const searchInput = document.querySelector('input[name="search_query"]');
        searchInput.value = ''; // Clear the search query

        // Trigger the form submission to reload the page
        const searchForm = document.querySelector('form');
        searchForm.submit();
    });

    studentModal.addEventListener('show.bs.modal', function (event) {
        const listItem = event.relatedTarget;
        const studentName = listItem.getAttribute('data-name');
        const studentScore = listItem.getAttribute('data-score');
        const studentPlace = listItem.getAttribute('data-place');
        const studentLetter = studentName.charAt(0);

        studentNameElement.textContent = studentName;
        studentScoreElement.textContent = studentScore;
        studentPlaceElement.textContent = studentPlace;
        studentLetterElement.textContent = studentLetter;
    });
});
