let schoolId;

let challenges;

window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    console.log("Match: ");
    console.log(match[2]);
    if (match) return match[2];
};


function renderChallenges(UitdagingData) {
    let htmlstring = '';
    let index = 0;

    UitdagingData.forEach(element => {
        console.log(element);

        htmlstring += `
        <div class="uitdaging" onclick="redirectToDetails(${element.id})">
        <div id="upperElements">
            <img class="challengeIcon" src="${element.img_url}" alt="Logo" width="20%">
            <div id="textAndLevel">
                <h4>${element.title}</h4>
                <img class="moeilijkheid" src="resources/Bonusresources/${element.difficulty}.svg" alt="moeilijkheidsgraat"
                    width="50%">
                <h4 class="moeilijkheidText" id="${element.difficulty}">${element.difficulty}</h4>
            </div>
        </div>
        <p>
          ${element.description}
        </p>
        <div class="startBox">
            <a id="DetailLinks" >
                <h4>START</h4>
            </a>
            <h3 id="startArrrow">&#10095;</h3>
        </div>
    </div>
    `

        index++;
    });

    document.getElementById('challengeList').innerHTML = htmlstring;
}




let getChallenges = async () => {
    const rawResponse = await fetch(
        "https://linkindekabel.herokuapp.com/api/challenge/bonus", {
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

    renderChallenges(content);
};

getChallenges();