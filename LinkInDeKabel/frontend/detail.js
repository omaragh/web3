let contentId;

let titel;
let beschrijving;
let benodigheden;
let tutorial;


window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    console.log("Match: ");
    console.log(match[2]);
    if (match) return match[2];
};


let getChallenges = async () => {

    if (getCookie("UitdagingType") == "Basic") {
        const rawResponse = await fetch(
            `https://linkindekabel.herokuapp.com/api/challenge/basic/${getCookie("UitdagingId")}`, {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getCookie("jwt")}`,
                },
            }
        );
        const content = await rawResponse.json();

        console.log("Content:");
        console.log(content);

        fetchContent(content);

    } else if (getCookie("UitdagingType") == "Bonus") {

        const rawResponse = await fetch(
            `https://linkindekabel.herokuapp.com/api/challenge/bonus/${getCookie("UitdagingId")}`, {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getCookie("jwt")}`,
                },
            }
        );
        const content = await rawResponse.json();

        console.log("Content:");
        console.log(content);

        fetchContent(content);
    }


};

getChallenges();




function fetchContent(content) {
    renderPage(content.title, content.description, content.materials, content.tutorials);
}


document.getElementById("back").addEventListener('click', (e) => {
    e.preventDefault();

    if (getCookie("UitdagingType") == "Basic") {
        window.open(`uitdagingen.html`, "_self");
    } else if (getCookie("UitdagingType") == "Bonus") {
        window.open(`bonus.html`, "_self");
    }
});


function renderPage(titel, beschrijving, benodigdheden, tutorial) {

    //Beschrijving inladen
    document.getElementById('beschrijvingText').innerHTML = beschrijving;
    //----------------------


    //Titel inladen
    document.getElementsByClassName('pageTitle')[0].innerHTML = titel;
    document.title = titel + "| Link in de Kabel";
    //----------------------


    //Tutorials inladen
    let tutorialString = "";

    tutorial = tutorial.replace('[', '');
    tutorial = tutorial.replace(']', '');
    tutorial = tutorial.replace(/ /g, '');
    tutorial = tutorial.split(',');

    let filteredList = [];
    tutorial.forEach(element => {
        let enposition = null;

        element = element.replace("'", '');
        element = element.replace("watch?v=", "embed/");

        enposition = element.search('&');
        element = element.slice(0, enposition);

        if (element.includes("youtube")) {
            filteredList.push(element);
        }
    });

    console.log(filteredList);

    filteredList.forEach(element => {
        tutorialString += `<iframe width="450" height="300" src="${element}">
        </iframe>`
    });



    document.getElementsByClassName('tutorialFlexbox')[0].innerHTML = tutorialString;

    //----------------------


    //Benodigdheden inladen

    let benodighedenString = "";

    benodigdheden = benodigdheden.replace('[', '');
    benodigdheden = benodigdheden.replace(']', '');
    benodigdheden = benodigdheden.replace(/ /g, '');
    benodigdheden = benodigdheden.split(',');

    benodigdheden.forEach(element => {
        element = element.replace("'", '');
        element = element.replace("'", '');
        console.log(element);
        switch (element) {
            case element = "gsm":
                benodighedenString += `
                <div class="iconFlexbox">
                <img class="scoreSter" src="resources/Icons/benodigdhedenIcons/${element}.svg" width="50px">
                <p class="iconText">${element}</p>
                </div>`
                break;
            case element = "computer":
                benodighedenString += `
                <div class="iconFlexbox">
                <img class="scoreSter" src="resources/Icons/benodigdhedenIcons/${element}.svg" width="50px">
                <p class="iconText">${element}</p>
                </div>`
                break;
            case element = "usb":
                benodighedenString += `
                <div class="iconFlexbox">
                <img class="scoreSter" src="resources/Icons/benodigdhedenIcons/${element}.svg" width="50px">
                <p class="iconText">${element}</p>
                </div>`
                break;
            case element = "internet":
                benodighedenString += `
                <div class="iconFlexbox">
                <img class="scoreSter" src="resources/Icons/benodigdhedenIcons/${element}.svg" width="50px">
                <p class="iconText">${element}</p>
                </div>`
                break;
            case element = "mobile-data":
                benodighedenString += `
                <div class="iconFlexbox">
                <img class="scoreSter" src="resources/Icons/benodigdhedenIcons/${element}.svg" width="50px">
                <p class="iconText">${element}</p>
                </div>`
                break;
            case element = "toetsenbord-muis":
                benodighedenString += `
                <div class="iconFlexbox">
                <img class="scoreSter" src="resources/Icons/benodigdhedenIcons/${element}.svg" width="50px">
                <p class="iconText">${element}</p>
                </div>`
                break;
            case element = "other":
                benodighedenString += `
                <div class="iconFlexbox">
                <img class="scoreSter" src="resources/Icons/benodigdhedenIcons/${element}.svg" width="50px">
                <p class="iconText">${element}</p>
                </div>`
                break;
            default:
                break;
        }
    });


    document.getElementsByClassName('iconsFlexbox')[0].innerHTML = benodighedenString;


    //----------------------

    let getUsers = async () => {
        const rawResponse = await fetch(
            "https://linkindekabel.herokuapp.com/api/user", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getCookie("jwt")}`,
                },
            }
        );
        const content = await rawResponse.json();

        console.log("Content:");
        console.log(content);

    };
    getUsers();
}