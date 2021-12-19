let werken;

function fetchInDeKijkerData() {
    //Fetch the inDeKijker data and place it in WERKEN.
}

function renderInDeKijer(werken) {
    //insert html into page
}

function openPopUp(werkNummer) {
    document.getElementById("popUp").style.display = "flex";
    let imgs;
    let captions;

    switch (werkNummer) {
        case werkNummer = 1:
            imgs = ["resources/InDeKijkeresources/powerPoint.jpeg", "resources/InDeKijkeresources/videoEdit.jpeg", "resources/InDeKijkeresources/wordDocu.jpeg", "resources/InDeKijkeresources/foto2.jpeg", "resources/InDeKijkeresources/foto.webp"];
            captions = ["Een mooie Power Point", "een fantastisch geëdite video", "Dit was het beste Word Document", "Deze foto straalde!", "Deze foto is technish fantastisch"];
            break;
        case werkNummer = 2:
            imgs = ["resources/InDeKijkeresources/powerPoint.jpeg", "resources/InDeKijkeresources/videoEdit.jpeg", "resources/InDeKijkeresources/wordDocu.jpeg", "resources/InDeKijkeresources/foto2.jpeg", "resources/InDeKijkeresources/foto.webp"];
            captions = ["Een mooie Power Point", "een fantastisch geëdite video", "Dit was het beste Word Document", "Deze foto straalde!", "Deze foto is technish fantastisch"];
            break;
        case werkNummer = 3:
            imgs = ["resources/InDeKijkeresources/powerPoint.jpeg", "resources/InDeKijkeresources/videoEdit.jpeg", "resources/InDeKijkeresources/wordDocu.jpeg", "resources/InDeKijkeresources/foto2.jpeg", "resources/InDeKijkeresources/foto.webp"];
            captions = ["Een mooie Power Point", "een fantastisch geëdite video", "Dit was het beste Word Document", "Deze foto straalde!", "Deze foto is technish fantastisch"];
            break;
        case werkNummer = 4:
            imgs = ["resources/InDeKijkeresources/powerPoint.jpeg", "resources/InDeKijkeresources/videoEdit.jpeg", "resources/InDeKijkeresources/wordDocu.jpeg", "resources/InDeKijkeresources/foto2.jpeg", "resources/InDeKijkeresources/foto.webp"];
            captions = ["Een mooie Power Point", "een fantastisch geëdite video", "Dit was het beste Word Document", "Deze foto straalde!", "Deze foto is technish fantastisch"];
            break;
        case werkNummer = 5:
            imgs = ["resources/InDeKijkeresources/powerPoint.jpeg", "resources/InDeKijkeresources/videoEdit.jpeg", "resources/InDeKijkeresources/wordDocu.jpeg", "resources/InDeKijkeresources/foto2.jpeg", "resources/InDeKijkeresources/foto.webp"];
            captions = ["Een mooie Power Point", "een fantastisch geëdite video", "Dit was het beste Word Document", "Deze foto straalde!", "Deze foto is technish fantastisch"];
            break;
        default:
            break;
    }

    let index = 1;

    imgs.forEach(img => {
        document.getElementById("slideShow").innerHTML += `
            <div class="mySlides fade">
                <div class="numbertext"><p>${index} / 5</p></div>
                <img id="slideImg" src=${img}>
                <div class="text"><p>${captions[index - 1]}</p></div>
            </div>
        `
        index++;
    });

    document.getElementById("slideShow").innerHTML += `
        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    `

    document.getElementsByClassName("mySlides")[slideIndex - 1].style.display = "block";
    document.getElementsByClassName("dot")[slideIndex - 1].className += " active";
}

document.getElementById("close").addEventListener('click', (e) => {
    document.getElementById("popUp").style.display = "none";
});

for (let i = 1; i < 6; i++) {
    document.getElementById("werk" + i).addEventListener('click', (e) => {
        openPopUp(i);
    });
}