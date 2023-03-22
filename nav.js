let nav = document.querySelector("nav")

function getURL() {
    let URL = window.location.href
    URL = URL.split("/")
    return URL[URL.length - 1]
}
let pagesNav = {}

function setHTML() {
    if (window.screen.width >= 675) {
        pagesNav = {
            index: `<ul>
    <li><a href="./carte.html">Menu du restaurant</a></li>
    <li><a href="./valeurs.html">Nos valeurs</a></li>
    <li><a href="./nouscontacter.html">Nous contacter</a></li>   
    <li><a href="./Reservation.html">Reserver</a></li>
    </ul>`,
            carte: ` <ul>
    <li><a href="./index.html">Accueil</a></li>
    <li><a href="./valeurs.html">Nos valeurs</a></li>
    <li><a href="./nouscontacter.html">Nous contacter</a></li>
    <li><a href="./Reservation.html">Reserver</a></li>
    </ul>`,
            valeurs: ` <ul>
    <li><a href="./index.html">Accueil</a></li>
    <li><a href="./carte.html">Menu du restaurant</a></li>
    <li><a href="./nouscontacter.html">Nous contacter</a></li>
    <li><a href="./Reservation.html">Reserver</a></li>
    </ul>`,
            contact: `<ul>
    <li><a href="./index.html">Accueil</a></li>
    <li><a href="./carte.html">Menu du restaurant</a></li>
    <li><a href="./valeurs.html">Nos valeurs</a></li>
    <li><a href="./Reservation.html">Reserver</a></li>
</ul>`,
            reservation: ` <ul>
<li><a href="./index.html">Accueil</a></li>
<li><a href="./valeurs.html">Nos valeurs</a></li>
<li><a href="./nouscontacter.html">Nous contacter</a></li>
<li><a href="./Reservation.html">Reserver</a></li>
</ul>`}

    } else {

        pagesNav = {
            index: `<ul>
    <li><a href="./carte.html">Menu du restaurant</a></li>
    <li><a href="./valeurs.html">Nos valeurs</a></li>
    <li><a href="./nouscontacter.html">Nous contacter</a></li>
    
    
    <li>
        <button id="animatedButton" class="menu-reserver"><a href="./Reservation.html">
                <div id="messenger"></div>
            </a>
        </button>
    </li>
    </ul>`,
            carte: ` <ul>
    <li><a href="./index.html">Accueil</a></li>
    <li><a href="./valeurs.html">Nos valeurs</a></li>
    <li><a href="./nouscontacter.html">Nous contacter</a></li>
    <li>
        <button id="animatedButton" class="menu-reserver"><a href="./Reservation.html">
                <div id="messenger"></div>
            </a>
        </button>
    </li>
    </ul>`,
            valeurs: ` <ul>
    <li><a href="./index.html">Accueil</a></li>
    <li><a href="./carte.html">Menu du restaurant</a></li>
    <li><a href="./nouscontacter.html">Nous contacter</a></li>


    <li>
        <button id="animatedButton" class="menu-reserver"><a href="./Reservation.html">
                <div id="messenger"></div>
            </a>
        </button>
    </li>
    </ul>`,
            contact: `<ul>
    <li><a href="./index.html">Accueil</a></li>
    <li><a href="./carte.html">Menu du restaurant</a></li>
    <li><a href="./valeurs.html">Nos valeurs</a></li>
    <li>
        <button id="animatedButton" class="menu-reserver"><a href="./Reservation.html">
                <div id="messenger"></div>
            </a>
        </button>
    </li>
</ul>`,
            reservation: ` <ul>
<li><a href="./index.html">Accueil</a></li>
<li><a href="./valeurs.html">Nos valeurs</a></li>
<li><a href="./nouscontacter.html">Nous contacter</a></li>
<li>
    <button class="menu-reserver"><a href="./carte.html">
            <div>La Carte</div>
        </a>
    </button>
</li>
</ul>`

        }
    }
}

function createNav() {
    switch (getURL()) {
        case "index.html":
            nav.innerHTML = pagesNav.index;
            break;
        case "carte.html":
            nav.innerHTML = pagesNav.carte;
            break;
        case "valeurs.html":
            nav.innerHTML = pagesNav.valeurs;
            break;
        case "nouscontacter.html":
            nav.innerHTML = pagesNav.contact;
            break;
        case "Reservation.html":
            nav.innerHTML = pagesNav.reservation;
            break;
    }

}

setHTML()
createNav()
window.onresize = function () { setHTML(); createNav(); console.log("test") }
window.addEventListener('resize', function () { setHTML(); createNav(); console.log("test") });






