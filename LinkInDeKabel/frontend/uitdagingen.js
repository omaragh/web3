let klasId;

let challengeTitle;
let challengeDesc;
let challengePic;

/////////////////////////////////

window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    // console.log("Match: ");
    // console.log(match[2]);
    if (match) return match[2];
};

/////////////////////////////////

console.log(getCookie("jwt"));

function getClassId() {
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
        console.log(content);
        klasId = content.classroom.id;
    };
    getUsers();
}

function fetchMainChallenge(id) {
    let getChallenges = async () => {
        const rawResponse = await fetch(
            "https://linkindekabel.herokuapp.com/api/challenge/basic", {
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

        content.forEach(challenge => {
            if (challenge.available == true || challenge.id == 2) {
                document.cookie = `UitdagingId = ${challenge.id}`;
                document.cookie = `UitdagingType = Basic`;
                renderChallenge(challenge.title, challenge.description, challenge.img_url);
            }
        });
    };
    getChallenges();
}

function renderChallenge(challengeTitle, challengeDesc, challengePic) {
    document.getElementById("title").innerText = challengeTitle;
    document.getElementById("desc").innerText = challengeDesc;
    document.getElementById("pic").src = challengePic;
}

document.getElementById("weekChallenge").addEventListener('click', (e) => {
    e.preventDefault();

    document.cookie = `back = uitdagingen.html`;
    window.open("detailsuitdaging.html", "_self");
});

getClassId();
fetchMainChallenge(klasId);