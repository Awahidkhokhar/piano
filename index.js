document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 81:
            new Audio("./sound/29.mp3").play();
            document.getElementById("Q").setAttribute("class", "black black1 black-pressed");
            break;
        case 87:
            new Audio("./sound/31.mp3").play();
            document.getElementById("W").setAttribute("class", "black black2 black-pressed");
            break;
        case 69:
            new Audio("./sound/36.mp3").play();
            document.getElementById("E").setAttribute("class", "black black3 black-pressed");
            break;

        case 82:
            new Audio("./sound/38.mp3").play();
            document.getElementById("R").setAttribute("class", "black black4 black-pressed");
            break;
        case 84:
            new Audio("./sound/41.mp3").play();
            document.getElementById("T").setAttribute("class", "black black5 black-pressed");
            break;
        case 89:
            new Audio("./sound/43.mp3").play();
            document.getElementById("Y").setAttribute("class", "black black6 black-pressed");
            break;
        case 85:
            new Audio("./sound/46.mp3").play();
            document.getElementById("U").setAttribute("class", "black black7 black-pressed");
            break;
        case 73:
            new Audio("./sound/48.mp3").play();
            document.getElementById("I").setAttribute("class", "black black8 black-pressed");
            break;
        case 79:
            new Audio("./sound/50.mp3").play();
            document.getElementById("O").setAttribute("class", "black black9 black-pressed");
            break;
        case 80:
            new Audio("./sound/53.mp3").play();
            document.getElementById("P").setAttribute("class", "black black10 black-pressed");
            break;
        case 219:
            new Audio("./sound/55.mp3").play();
            document.getElementById("bt11").setAttribute("class", "black black11 black-pressed");
            break;
        case 221:
            new Audio("./sound/58.mp3").play();
            document.getElementById("bt12").setAttribute("class", "black black12 black-pressed");
            break;
        case 49:
            new Audio("./sound/60.mp3").play();
            document.getElementById("bt13").setAttribute("class", "black black13 black-pressed");
            break;
        case 50:
            new Audio("./sound/62.mp3").play();
            document.getElementById("bt14").setAttribute("class", "black black14 black-pressed");
            break;
        case 65:
            new Audio("./sound/28.mp3").play();
            document.getElementById("A").setAttribute("class", "btn btn-pressed");
            break;
        case 83:
            new Audio("./sound/30.mp3").play();
            document.getElementById("S").setAttribute("class", "btn btn-pressed");
            break;
        case 68:
            new Audio("./sound/32.mp3").play();
            document.getElementById("D").setAttribute("class", "btn btn-pressed");
            break;
        case 70:
            new Audio("./sound/33.mp3").play();
            document.getElementById("F").setAttribute("class", "btn btn-pressed");
            break;
        case 71:
            new Audio("./sound/34.mp3").play();
            document.getElementById("G").setAttribute("class", "btn btn-pressed");
            break;
        case 72:
            new Audio("./sound/35.mp3").play();
            document.getElementById("H").setAttribute("class", "btn btn-pressed");
            break;
        case 74:
            new Audio("./sound/37.mp3").play();
            document.getElementById("J").setAttribute("class", "btn btn-pressed");
            break;
        case 75:
            new Audio("./sound/39.mp3").play();
            document.getElementById("K").setAttribute("class", "btn btn-pressed");
            break;
        case 76:
            new Audio("./sound/40.mp3").play();
            document.getElementById("L").setAttribute("class", "btn btn-pressed");
            break;
        case 186:
            new Audio("./sound/42.mp3").play();
            document.getElementById("Z").setAttribute("class", "btn btn-pressed");
            break;
        case 222:
            new Audio("./sound/44.mp3").play();
            document.getElementById("X").setAttribute("class", "btn btn-pressed");
            break;
        case 220:
            new Audio("./sound/45.mp3").play();
            document.getElementById("C").setAttribute("class", "btn btn-pressed");
            break;
        case 191:
            new Audio("./sound/47.mp3").play();
            document.getElementById("V").setAttribute("class", "btn btn-pressed");
            break;
        case 190:
            new Audio("./sound/49.mp3").play();
            document.getElementById("B").setAttribute("class", "btn btn-pressed");
            break;
        case 188:
            new Audio("./sound/51.mp3").play();
            document.getElementById("N").setAttribute("class", "btn btn-pressed");
            break;
        case 77:
            new Audio("./sound/52.mp3").play();
            document.getElementById("M").setAttribute("class", "btn btn-pressed");
            break;
        case 78:
            new Audio("./sound/54.mp3").play();
            document.getElementById("aa").setAttribute("class", "btn btn-pressed");
            break;
        case 66:
            new Audio("./sound/56.mp3").play();
            document.getElementById("Cc").setAttribute("class", "btn btn-pressed");
            break;
        case 86:
            new Audio("./sound/57.mp3").play();
            document.getElementById("Cc").setAttribute("class", "btn btn-pressed");
            break;
        case 67:
            new Audio("./sound/59.mp3").play();
            document.getElementById("bb").setAttribute("class", "btn btn-pressed");
            break;
        case 88:
            new Audio("./sound/61.mp3").play();
            document.getElementById("ff").setAttribute("class", "btn btn-pressed");
            break;
        case 90:
            new Audio("./sound/63.mp3").play();
            document.getElementById("ll").setAttribute("class", "btn btn-pressed");
            break;
    }
}
document.onkeyup = function (event) {
    console.log(event.keyCode, event.key)
    switch (event.keyCode) {
        case 81:
            document.getElementById("Q").classList.remove("black-pressed")
            break;
        case 87:
            document.getElementById("W").classList.remove("black-pressed")
            break;
        case 69:
            document.getElementById("E").classList.remove("black-pressed")
            break;
        case 82:
            document.getElementById("R").classList.remove("black-pressed")
            break;
        case 84:
            document.getElementById("T").classList.remove("black-pressed")
            break;
        case 89:
            document.getElementById("Y").classList.remove("black-pressed")
            break;
        case 85:
            document.getElementById("U").classList.remove("black-pressed")
            break;
        case 73:
            document.getElementById("I").classList.remove("black-pressed")
            break;
        case 79:
            document.getElementById("O").classList.remove("black-pressed")
            break;
        case 80:
            document.getElementById("P").classList.remove("black-pressed")
            break;
        case 219:
            document.getElementById("bt11").classList.remove("black-pressed")
            break;
        case 221:
            document.getElementById("bt12").classList.remove("black-pressed")
            break;
        case 49:
            document.getElementById("bt13").classList.remove("black-pressed")
            break;
        case 50:
            document.getElementById("bt14").classList.remove("black-pressed")
            break;

        // A //
        case 65:
            document.getElementById("A").classList.remove("btn-pressed")
            break;
        case 83:
            document.getElementById("S").classList.remove("btn-pressed")
            break;
        case 68:
            document.getElementById("D").classList.remove("btn-pressed")
            break;
        case 70:
            document.getElementById("F").classList.remove("btn-pressed")
            break;
        case 71:
            document.getElementById("G").classList.remove("btn-pressed")
            break;
        case 72:
            document.getElementById("H").classList.remove("btn-pressed")
            break;
        case 74:
            document.getElementById("J").classList.remove("btn-pressed")
            break;


        case 75:
            document.getElementById("K").classList.remove("btn-pressed")
            break;
        case 76:

            document.getElementById("L").classList.remove("btn-pressed")
            break;
        case 186:

            document.getElementById("Z").classList.remove("btn-pressed")
            break;
        case 222:

            document.getElementById("X").classList.remove("btn-pressed")
            break;
        case 220:

            document.getElementById("C").classList.remove("btn-pressed");
            break;
        case 191:

            document.getElementById("V").classList.remove("btn-pressed");
            break;
        case 190:

            document.getElementById("B").classList.remove("btn-pressed");
            break;
        case 188:

            document.getElementById("N").classList.remove("btn-pressed");
            break;
        case 77:

            document.getElementById("M").classList.remove("btn-pressed");
            break;
        case 78:

            document.getElementById("aa").classList.remove("btn-pressed");
            break;
        case 66:

            document.getElementById("Cc").classList.remove("btn-pressed");
            break;
        case 86:

            document.getElementById("Cc").classList.remove("btn-pressed");
            break;
        case 67:

            document.getElementById("bb").classList.remove("btn-pressed");
            break;
        case 88:

            document.getElementById("ff").classList.remove("btn-pressed");
            break;
        case 90:

            document.getElementById("ll").classList.remove("btn-pressed");
            break;






    }

}