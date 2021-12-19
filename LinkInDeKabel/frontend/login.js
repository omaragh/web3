let mail = document.getElementById("Mailadress");
let wachtwoord = document.getElementById("Wachtwoord");

let submit = document.getElementById("LogIn_btn");

/////////////////////////////////

window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    console.log("Match: ");
    console.log(match[2]);
    if (match) return match[2];
};

/////////////////////////////////

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (mail.value != "" && wachtwoord.value != "") {

        document.getElementById("overlay").style.display = "block";
        document.getElementById("imageContainer").style.display = "flex";

        let succes = false;
        let response;
        let loginUser = async () => {
            const rawResponse = await fetch(
                "https://linkindekabel.herokuapp.com/api/login", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: mail.value,
                        password: wachtwoord.value,
                    }),
                }
            ).then((result) => {
                if (result.status === 200) {
                    succes = true;
                    response = result;
                    document.getElementById("error").style.display = "none"
                } else if (result.status === 400) {
                    document.getElementById("error").innerHTML = "Error " + result.status + ": Foutieve Email of wachtwoord is verkeerd.";
                    document.getElementById("error").style.display = "block"
                } else if (result.status === 500) {
                    document.getElementById("error").innerHTML = "Error " + result.status + ": Interne server error, probeer het later nog eens.";
                    document.getElementById("error").style.display = "block"
                } else if (result.status === 404) {
                    document.getElementById("error").innerHTML = "Error " + result.status + ": De server is tijdeljk offline, probeer het later nog eens.";
                    document.getElementById("error").style.display = "block"
                }
            }).catch((err) => {
                document.getElementById("error").innerHTML = err;
                document.getElementById("error").style.display = "block"
            }).finally(() => {
                document.getElementById("overlay").style.display = "none";
                document.getElementById("imageContainer").style.display = "none";
            });

            const content = await response.json();
            console.log(content);
            document.cookie = `jwt = ${content.token}`;

            if (succes) {
                window.open("uitdagingen.html", "_self");
            }
        };

        loginUser();
    } else {
        document.getElementById("error").style.display = "block"
    }
});