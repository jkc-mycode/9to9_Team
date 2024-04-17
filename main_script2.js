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

/*엄혜인 이모티콘 있는 아코디언 누르면 mbti 성격, 장점, 협업 스타일 누르면 나타나개 하기*/
function openclose_1() {
    $('#mbtiEom_contens').toggle();
}

function openclose_2() {
    $('#Advantages_contens').toggle();
}
function openclose_3() {
    $('#Cooperation_contens').toggle();
}
