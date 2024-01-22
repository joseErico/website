function discord(loader) {
    let time = 4;
    loader.innerHTML = 'Loading, please wait....................5';

    let interval = setInterval(() => {
        loader.innerHTML = 'Loading, please wait....................' + time--;

        if(time === 0) {
            clearInterval(interval);
            window.open('https://discord.com/users/jose_erico', '_blank');
            loader.innerHTML = 'Loading, please wait....................OK'+
            '<a href="https://discord.com/users/jose_erico" target="_blank">https://discord.com/users/jose_erico</a>';
        }
    }, 1000);
}

function twitter(loader) {
    let time = 4;
    loader.innerHTML = 'Loading, please wait....................5';

    let interval = setInterval(() => {
        loader.innerHTML = 'Loading, please wait....................' + time--;

        if(time === 0) {
            clearInterval(interval);
            window.open('https://twitter.com/joseErico_', '_blank');
            loader.innerHTML = 'Loading, please wait....................OK'+
            '<a href="https://twitter.com/joseErico_" target="_blank">https://twitter.com/joseErico_</a>';
        }
    }, 1000);
}

function email(loader) {
    let time = 4;
    loader.innerHTML = 'Loading, please wait....................5';

    let interval = setInterval(() => {
        loader.innerHTML = 'Loading, please wait....................' + time--;

        if(time === 0) {
            clearInterval(interval);
            loader.innerHTML = 'Loading, please wait....................OK'+
                               '<a href="mailto:work@joseerico.com">work@joseerico.com</a>';
        }
    }, 1000);
}

function github(loader) {
    let time = 4;
    loader.innerHTML = 'Loading, please wait....................5';

    let interval = setInterval(() => {
        loader.innerHTML = 'Loading, please wait....................' + time--;

        if(time === 0) {
            clearInterval(interval);
            window.open('https://github.com/joseErico', '_blank');
            loader.innerHTML = 'Loading, please wait....................OK'+
                                '<a href="https://github.com/joseErico" target="_blank">https://github.com/joseErico</a>';
        }
    }, 1000);
}

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

    //functions available
    const functions = {
        1: discord,
        2: twitter,
        3: email,
        4: github
    };

    //get loader
    let loader = document.getElementById('loading');

    //menu choice
    let menuChoice = document.getElementById('menu-choice');

    //show menu message
    let menuMessage = document.getElementById('menu-message');
    menuMessage.style.display = 'block';

    //show menu options
    let interval = setInterval(() => {
        if(menuMessage.offsetWidth >= 280) {
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
            
            if(choice < 1 || choice > 4 || !regex.test(choice)) {
                alert('Please, choose a valid option');
                return false;
            }

            if(functions[choice]) {
                functions[choice](loader);
            }
        }
    });
});