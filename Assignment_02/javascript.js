async function accept(){
    // document.body.classList.add('bghover');
    const result1 = await progressBar();
    setTimeout(removeProgress,3100);
}

function reject(){
    document.getElementById('title').style.backgroundColor="white";
    document.getElementById('title').style.color="red";
}

function progressBar(){
    document.getElementById("progress").classList.add("animation");
}
function removeProgress(){
    document.getElementById("progress").classList.remove("animation");
    document.getElementById('title').style.backgroundColor="black";
    document.getElementById('title').style.color="white";

}
