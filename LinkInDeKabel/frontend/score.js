let klasId;

let klasMaxScore = 0;
let userMaxScore = 0;


window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    console.log("Match: ");
    console.log(match[2]);
    if (match) return match[2];
};

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

    await CalculateMaxUserScore();
    //fetchKlassScore(content.classroom.id)

    renderPage(content, userMaxScore, klasMaxScore)
};

getUsers();

function fetchKlassScore(klasId) {

    let getUsers = async () => {
        const rawResponse = await fetch(
            `https://linkindekabel.herokuapp.com/api/classroom-school-id/${klasId}`, {
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
    };

    getUsers();
}

async function CalculateMaxUserScore(content) {
    await getBasicChallenges();
    await getBonusChallenges();
}

let getBasicChallenges = async () => {
    const rawResponse = await fetch(
        `https://linkindekabel.herokuapp.com/api/challenge/basic`, {
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

    content.forEach(element => {
        userMaxScore += 3;
    });
};

let getBonusChallenges = async () => {
    const rawResponse = await fetch(
        `https://linkindekabel.herokuapp.com/api/challenge/bonus`, {
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

    content.forEach(element => {
        userMaxScore += 3;
    });

};

function renderPage(content, userMaxScore, klasMaxScore) {
    console.log("here");
    console.log(content);
    document.getElementById("studentenNaam").innerHTML = content.name;
    document.getElementById("klasNaam").innerHTML = content.classroom.name;
    document.getElementById("maxUserScore").innerHTML = userMaxScore;
    document.getElementById("maxKlasScore").innerHTML = klasMaxScore;
}