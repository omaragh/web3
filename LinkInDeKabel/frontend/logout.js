/////////////////////////////////

window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    console.log("Match: ");
    console.log(match[2]);
    if (match) return match[2];
};

/////////////////////////////////

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

    document.getElementById("scoreWeergave").innerHTML = `
        <h4 style="color: black;">${content.name}: ${content.points} ptn</h4>
    `
};

getUsers();

document.getElementById("logout").addEventListener('click', (e) => {
    e.preventDefault();

    let logoutUser = async () => {
        const rawResponse = await fetch(
            "https://linkindekabel.herokuapp.com/api/logout", {
                method: "POST",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        function deleteAllCookies() {
            var cookies = document.cookie.split(";");

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }
        deleteAllCookies();
        window.open("login.html", "_self");
    };
    logoutUser();
});