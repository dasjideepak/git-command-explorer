let body = document.querySelector("body")
let ul = document.querySelector("ul");
let modal = document.querySelector(".modal");
let myBtn = document.querySelector("#myBtn");
let span = document.querySelector(".close");
let googleInput = document.querySelector(".google-search")
let search = document.querySelector(".search-box");
let subBtn = document.querySelector(".sub-btn");
let warning = document.querySelector(".warning")
let showTime = document.querySelector('.showTime');
let gSearch = document.querySelector(".gSearch");
let clock = document.querySelector(".clock");

// For localstorage
let time = localStorage.getItem('time') || 'hide';
let dark = localStorage.getItem('theme') || 'light';
let google = localStorage.getItem('google') || 'hide';

// Random Command Generator
let num = Math.floor(Math.random() * cmdData.length)
ul.innerHTML = `         <li>
    <h3 class="cmdHeading">Command</h3>
    <h4 class="cmd-show">${cmdData[num].command}</h4>

    <h3 class="cmdHeading">Utility</h3>
    <p class="cmd-p">${cmdData[num].utility}</p>

    <h3 class="cmdHeading">How to</h3>
    <p class="cmd-p">${cmdData[num].howto}</p>

    </li>`;

// Modal Box
myBtn.addEventListener("mouseup", function() {
  modal.style.display = "block";
});

span.addEventListener("mouseup", function() {
  modal.style.display = "none";
});

window.addEventListener("mouseup", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Dark or Light Mode Switcher
let cmdHeading = document.querySelectorAll(".cmdHeading")
let des = document.querySelector(".heading-des")
let darkLight = document.querySelector(".darkLight");

function showDarkLight(param){
    if(param === "dark") {
        darkLight.checked = true;
        body.style.backgroundColor = "#091921";
        body.style.color = "white";
        des.style.color = "white";
        myBtn.style.backgroundColor = "#091921";
        googleInput.style.color = "black";
        search.style.color = "black";
    } else {
        body.style.backgroundColor = "#EEF0F2";
        body.style.color = "rgb(15, 12, 12)";
        des.style.color = "#4a4a4a";
        myBtn.style.backgroundColor = "#EEF0F2";
    }
};

showDarkLight(dark);
darkLight.addEventListener("click", showDarkLight);

// Analog Clock
function analogClock(param) {
    if(param == "show") {
        showTime.checked = true;
        clock.style.display = "flex";
        const deg = 6;
        const hr = document.querySelector(".hr");
        const mn = document.querySelector("#mn");
        const sc = document.querySelector("#sc");
    
        setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;
    
            hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        });    
    } else {
        clock.style.display = "none";
    }
}
analogClock(time);

showTime.addEventListener("click", analogClock); 

// Google 
let googlebox = document.querySelector(".google");
function googleShow(parameter) {
    if(parameter === "show") {
        googlebox.checked = true;
        gSearch.style.display="flex";
    } else {
        gSearch.style.display="none";
    }
};
googleShow(google);

googlebox.addEventListener("click", googleShow);

function googleSearch(event) {
    if(event.keyCode === 13) {
        window.location.href ="https://www.google.com/search?q=" + escape(googleInput.value);
    }
}

// Create UI Function
function createUI(event) {
    let cmdUI = event.map(elem => {
        return`         <li>
    <h3 class="cmdHeading">Command</h3>
    <h4 class="cmd-show">${event[0].command}</h4>
    <h3 class="cmdHeading">Utility</h3>
    <p class="cmd-p">${event[0].utility}</p>
    <h3 class="cmdHeading">How to</h3>
    <p class="cmd-p">${event[0].howto}</p>
    </li>`;
    })
    ul.innerHTML = cmdUI[0];
}

// Search Command Function
function searchCommand(event){
    event.preventDefault();
    if(event.keyCode === 13) {
        if(search.value.length >= 1) {
            var filteredCommand = cmdData.filter(elem => {    
                return elem.command.toLowerCase().includes(event.target.value.toLowerCase());
            });
            search.value = "";  
            if(filteredCommand.length >  0){
                createUI(filteredCommand);
                warning.style.display = "none";
            } else {
                var showError = '<h2 class="error">Command Not Found</h2>';
                console.log("Hi")
                warning.innerHTML = showError;
                warning.style.display = "flex";
            }                                
        }    
    }     
}
search.addEventListener('keyup', searchCommand);
googleInput.addEventListener('keyup', googleSearch);    

// Internet Status
window.addEventListener('load', updateOnlineStatus)
window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Online/Offline Status Function
function updateOnlineStatus(event) {
    var log = document.querySelector("#log");
    if(navigator.onLine) {
        log.innerHTML = ""; 
    } else {
        let sh = `<h5 class="netstatus-text">No Internet <br> <span class = "checknet"> Check Your Internet Connection</span></h5>
            <img class="status-img" src="./img/doremon.gif" alt="Gif File">`
        log.innerHTML = sh; 
    }
}
var netStatus = document.querySelector(".status-img"); 

// LocalStorage on toggles
let customizeButton = document.querySelector('#myBtn');
customizeButton.addEventListener('click', (event) => {
    darkLight.addEventListener('click', (event) => {
        localStorage.setItem('theme', event.target.checked ? 'dark' : 'light')
        showDarkLight(localStorage.getItem('theme'))
    });
    showTime.addEventListener('click', (event) => {
        localStorage.setItem('time', event.target.checked ? 'show' : 'hide')
        analogClock(localStorage.getItem('time'))
    });
    googlebox.addEventListener('click', (event) => {
        localStorage.setItem('google', event.target.checked ? 'show' : 'hide')
        googleShow(localStorage.getItem('google'))
    });
});