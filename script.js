var fnum = document.getElementById("num").innerText;

function increment () {
    fnum ++;
    document.getElementById("num").innerText = fnum;
}
function inminus() {
    fnum --;
    document.getElementById("num").innerText = fnum;
}
function BottLike(){
    var button = document.getElementById("likeButton");

    if (button.classList.contains("liked")) {
        button.classList.remove('liked');
        button.textContent = "I don't Like";
    } else {
        button.classList.add('liked');
        button.textContent = "I like "
    }
}
function resetCounter() {
    fnum = "0"
    document.getElementById("num").innerText = fnum;


}