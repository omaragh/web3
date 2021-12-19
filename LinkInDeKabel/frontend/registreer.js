let voornaam = document.getElementById("Voornaam");
let achternaam = document.getElementById("Achternaam");
let mail = document.getElementById("Mailadress");
let wachtwoord = document.getElementById("Wachtwoord");

let school = document.getElementById('School');
let klas = document.getElementById('Klas');
let submit = document.getElementById("MaakAccount_input");

let schoolsAndClasses;

/////////////////////////////////

window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    console.log("Match: ");
    console.log(match[2]);
    if (match) return match[2];
};

/////////////////////////////////

let getSchoolsAndClassrooms = async () => {
    const rawResponse = await fetch(
        "https://linkindekabel.herokuapp.com/api/schools-with-classrooms", {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    );
    schoolsAndClasses = await rawResponse.json();
    console.log(schoolsAndClasses);

    let htmlString = `<option value="NONE">Kies jouw school</option>`;
    schoolsAndClasses.forEach(school => {
        htmlString += `<option value="${school.id}">${school.name}</option>`;
    });

    school.innerHTML = htmlString;
    klas.innerHTML = `<option value="NONE">Kies eerst jouw school</option>`;
};
await getSchoolsAndClassrooms();

school.addEventListener('change', (e) => {
    e.preventDefault();

    schoolsAndClasses.forEach(dSchool => {
        if (parseInt(dSchool.id) === parseInt(school.options[school.selectedIndex].value)) {
            let htmlString = `<option value="NONE">Kies jouw klas</option>`;
            dSchool.classrooms.forEach(classroom => {
                htmlString += `<option value="${classroom.id}">${classroom.name}</option>`;
            });

            klas.innerHTML = htmlString;
        } else if (school.options[school.selectedIndex].value === "NONE") {
            klas.innerHTML = `<option value="NONE">Kies eerst jouw school</option>`;
        }
    });
});

submit.addEventListener('click', (e) => {
    e.preventDefault();

    let schoolValue = school.options[school.selectedIndex].value;
    let klasValue = klas.options[klas.selectedIndex].value;

    submit.addEventListener('click', () => {
        if (voornaam.value != "" && achternaam.value != "" && mail.value != "" && wachtwoord.value != "" && schoolValue != "NONE" && klasValue != "NONE") {

            document.getElementById("overlay").style.display = "block";
            document.getElementById("imageContainer").style.display = "flex";

            let register = async () => {

                let succes = false;
                let response;
                const rawResponse = await fetch(

                    "https://linkindekabel.herokuapp.com/api/register",

                    {

                        method: "POST",

                        headers: {

                            credentials: "include",

                            Accept: "application/json",

                            "Content-Type": "application/json",

                        },

                        body: JSON.stringify({

                            name: voornaam.value + " " + achternaam.value,

                            email: mail.value,

                            password: wachtwoord.value,

                            repeat_password: wachtwoord.value,

                            school_id: schoolValue,

                            classroom_id: klasValue,

                        }),

                    }

                ).then((result) => {
                    if (result.status === 200) {
                        succes = true;
                        response = result;
                        document.getElementById("error").style.display = "none"
                    } else {
                        document.getElementById("error").innerHTML = "Error " + result.status + ": Er bestaat al een account op deze Email.";
                        document.getElementById("error").style.display = "block"
                    }
                }).catch((err) => {
                    document.getElementById("error").innerHTML = err;
                    document.getElementById("error").style.display = "block"
                }).finally(() => {
                    document.getElementById("overlay").style.display = "none";
                    document.getElementById("imageContainer").style.display = "none";
                });

                const content = response.json();
                console.log(content);
                document.cookie = `jwt = ${content.token}`;

                if (succes) {
                    document.getElementById("overlay").style.display = "block";
                    document.getElementById("imageContainer").style.display = "flex";
                    document.getElementById("loadText").innerText = "Je Wordt ingelogd";

                    let logInSucces = false;
                    let logInResponse;
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
                                logInSucces = true;
                                logInResponse = result;
                                document.getElementById("error").style.display = "none"
                            } else {
                                document.getElementById("error").innerHTML = "Error " + result.status + ": Foutieve Email of wachtwoord is verkeerd.";
                                document.getElementById("error").style.display = "block"
                            }
                        }).catch((err) => {
                            document.getElementById("error").innerHTML = err;
                            document.getElementById("error").style.display = "block"
                        }).finally(() => {
                            document.getElementById("overlay").style.display = "none";
                            document.getElementById("imageContainer").style.display = "none";
                        });

                        const logInContent = await logInResponse.json();
                        console.log(logInContent);
                        document.cookie = `jwt = ${logInContent.token}`;

                        if (logInSucces) {
                            window.open("uitdagingen.html", "_self");
                        }
                    };

                    loginUser();
                }
            };

            register();
        } else {
            document.getElementById("error").style.display = "block"
        }
    });
});