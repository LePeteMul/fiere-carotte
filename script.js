//Script du bouton réservation animé

var Messenger = function (el) {
    'use strict';
    var m = this;

    m.init = function () {
        m.codeletters = "Réservation";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
            "Réservation"
        ];

        setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function (length) {
        var random_text = '';
        while (random_text.length < length) {
            random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
        }

        return random_text;
    };

    m.animateIn = function () {
        if (m.current_length < m.messages[m.message].length) {
            m.current_length = m.current_length + 2;
            if (m.current_length > m.messages[m.message].length) {
                m.current_length = m.messages[m.message].length;
            }

            var message = m.generateRandomString(m.current_length);
            $(el).html(message);

            setTimeout(m.animateIn, 80);
        } else {
            setTimeout(m.animateFadeBuffer, 80);
        }
    };

    m.animateFadeBuffer = function () {
        if (m.fadeBuffer === false) {
            m.fadeBuffer = [];
            for (var i = 0; i < m.messages[m.message].length; i++) {
                m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i) });
            }
        }

        var do_cycles = false;
        var message = '';

        for (var i = 0; i < m.fadeBuffer.length; i++) {
            var fader = m.fadeBuffer[i];
            if (fader.c > 0) {
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        $(el).html(message);

        if (do_cycles === true) {
            setTimeout(m.animateFadeBuffer, 100);
        } else {
            setTimeout(m.cycleText, 50);
        }
    };

    m.cycleText = function () {
        m.message = m.message + 1;
        if (m.message >= m.messages.length) {
            return;
        }

        m.current_length = 0;
        m.fadeBuffer = false;
        $(el).html('');

        setTimeout(m.animateIn, 200);
    };

    m.init();
}
console.clear();

//Script du menu déroulant
var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('show-menu');
    menuButton.classList.toggle('close');
    var messenger = new Messenger($('#messenger'));
});


//boutons du footer (juste pour vérifier qu'ils marchent, pas d'utilité directe)

var mailButton = document.querySelector('#mail');
mailButton.addEventListener('click', function (event) {
    event.target.style.visibility = 'hidden';
})
var phoneButton = document.querySelector('#phone');
phoneButton.addEventListener('click', function (event) {
    event.target.style.visibility = 'hidden';
})
var mapButton = document.querySelector('#map');
mapButton.addEventListener('click', function (event) {
    event.target.style.visibility = 'hidden';
})
var instaButton = document.querySelector('#insta');
instaButton.addEventListener('click', function (event) {
    event.target.style.visibility = 'hidden';
})
var fbButton = document.querySelector('#facebook');
fbButton.addEventListener('click', function (event) {
    event.target.style.visibility = 'hidden';
})
var twButton = document.querySelector('#twitter');
twButton.addEventListener('click', function (event) {
    event.target.style.visibility = 'hidden';
})




