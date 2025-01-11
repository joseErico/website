
function datetime() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = date.toLocaleDateString(navigator.language, options);
    
    document.getElementById('date-time').innerHTML = formattedDate;
}

document.addEventListener('DOMContentLoaded', function () {
    //show menu message
    let message = document.getElementById('message');
    message.style.display = 'block';

    //set datetime
    datetime();

    //show menu options
    let interval = setInterval(() => {
        console.log(message.offsetWidth);
        if(message.offsetWidth >= 282) {
            document.getElementById('contacts').style.display = 'block';
            clearInterval(interval);
        }
    }, 100);
});