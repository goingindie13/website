document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = () => {
            modal.style.opacity = '0'; // fades out the modal
            setTimeout(() => {
                modal.remove();
                document.body.classList.remove('no-scroll'); // remove the no-scroll class when modal is closed
            }, 300); // delay same as the transition duration
        };

        modalContent.appendChild(closeButton);

        // Add title
        const modalTitle = document.createElement('h2');
        modalTitle.textContent = card.dataset.title;
        modalContent.appendChild(modalTitle);

        // Add description
        const modalDescription = document.createElement('p');
        modalDescription.textContent = card.dataset.description;
        modalContent.appendChild(modalDescription);

        // Extract and append the hidden case study content
        const caseStudyContent = card.querySelector('.case-study-content').cloneNode(true);
        caseStudyContent.style.display = 'block'; // make it visible
        modalContent.appendChild(caseStudyContent);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.style.opacity = '0'; // fades out the modal
                setTimeout(() => {
                    modal.remove();
                    document.body.classList.remove('no-scroll'); // remove the no-scroll class when modal is clicked outside
                }, 300); // delay same as the transition duration
            }
        };

        document.body.classList.add('no-scroll'); // add the no-scroll class when modal is opened

        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.opacity = '1'; // fades in the modal
        }, 50); // this delay ensures the modal is rendered before starting the transition

    });
});
