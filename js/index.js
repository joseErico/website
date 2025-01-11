function datetime() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = date.toLocaleDateString(navigator.language, options);
    
    document.getElementById('date-time').innerHTML = formattedDate;
}

function resume() {
    document.querySelector('#content').style.display = 'none';
    document.querySelector('#resume').style.display = 'block';
}

function aboutme() {
    document.querySelector('#content').style.display = 'none';
    document.querySelector('#aboutme').style.display = 'block';
}

function contact() {
    document.querySelector('#content').style.display = 'none';
    document.querySelector('#contact').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    //verify if is a mobile device or a small resolution
    if(screen.width < 1024) {
        this.location.href = 'mobile.html';
    }

    //set datetime
    datetime();

    //functions available
    const functions = {
        1: resume,
        2: aboutme,
        3: contact
    };

    //menu choice
    let menuChoice = document.getElementById('menu-choice');

    //show welcome block
    document.getElementById('welcome').style.display = 'block';

    //show menu message
    let menuMessage = document.getElementById('menu-message');
    menuMessage.style.display = 'block';

    //show menu options
    let interval = setInterval(() => {
        if(menuMessage.offsetWidth >= 420) {
            document.getElementById('menu').style.display = 'block';
            menuChoice.focus();
            clearInterval(interval);
        }
    }, 100);

    //set input focus if user click out of field
    document.addEventListener('click', () => {
        menuChoice.focus();
    });

    //get the value from input when enter key is pressed on the menu-choice input
    menuChoice.addEventListener('keyup', (e) => {
        if(e.key === 'Enter') {
            let choice = menuChoice.value;
            const regex = /^\d+$/;
            
            if(choice < 1 || choice > 3 || !regex.test(choice)) {
            //if(choice < 1 || choice > 4 || !regex.test(choice)) {
                alert('Please, choose a valid option');
                return false;
            }

            if(functions[choice]) {
                functions[choice]();
            }
        }
    });


});