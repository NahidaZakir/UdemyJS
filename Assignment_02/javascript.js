async function accept(){
    const result1 = await progressBar();
    setTimeout(removeProgress,3100);
}

function reject(){
    document.getElementById('title').style.backgroundColor="transparent";
    document.getElementById('title').style.color="red";
}

function progressBar(){
    document.body.classList.add('bgclick');

    document.getElementById("progress").classList.add("animation");
}
function removeProgress(){
    document.getElementById("progress").classList.remove("animation");
    document.body.classList.remove('bgclick');

    document.getElementById('title').style.backgroundColor="black";
    document.getElementById('title').style.color="white";

}
