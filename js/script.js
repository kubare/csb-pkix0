const showContent = () => {
    var inputs = document.getElementById("main");
    var btn = document.getElementById("btn");

        inputs.style.display = "block";
        btn.style.display = "none"

        validateData();
}

const showFirstScreen = () => {
    window.location.reload();
}

const showSecondScreen = () => {
    popUp.style.display = "none";
}
