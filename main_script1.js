// Modal 열기
function openModal(modalname) {
    document.get
    $("#" + modalname).css('display', 'block');
}

// Modal 영역 밖을 클릭하면 Modal을 닫습니다.
window.onclick = function (event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
};


function btnopen() {

    window.open('https://github.com/rodlsdyd');

}

function btnopen2() {

    window.open('https://blog.naver.com/rlslek3');


}


