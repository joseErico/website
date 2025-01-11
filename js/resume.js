document.addEventListener('DOMContentLoaded', function () {
    //check if the page was opened directly
    if(window.location === window.parent.location) {
        this.location.href = '/';
    }

    //get the value from input when Q key is pressed on the menu-choice input
    window.addEventListener('keyup', (e) => {
        if(e.key === 'Q' || e.key === 'q') {
            window.top.location.reload();
        }
    });

    window.focus();
});