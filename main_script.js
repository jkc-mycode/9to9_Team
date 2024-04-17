const modal1= $("#exampleModal1").html (`<div class="modal-dialog modal-xl modal-dialog-scrollable">
<div class="modal-content">
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="modal1_body_left">
            <img src="./imgs/김정찬_아바타.png" class="modal1_body_left_img">
            <h4><b>팀장 김정찬</b></h4> <br>
            <p style="font-size: 20px;">
                안녕하세요! <br>1인분 이상의 백엔드 개발자가 되기 위해 학습중인 팀장 김정찬입니다.
                저는 원래 일을 하다가 대학에 편입 후 컴공으로 올해 졸업했습니다.
                하지만 너무 짧은 2년이었기에 더 많은 팀플과 소통을 통해 성장하고 싶어서
                캠프에 지원하게 되었습니다!
            </p> <br><br>
            <div class="modal1_body_left_footer">
                <a href="https://github.com/jkc-mycode">
                    <img src="./imgs/깃허브_아이콘.png" class="github_icon" />
                </a>
                <a href="https://velog.io/@my_code/posts">
                    <img src="./imgs/벨로그_아이콘.png" class="velog_icon" />
                </a>
            </div>
        </div>
        <div class="modal1_body_right">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                        aria-selected="true">나의 성격과 MBTI</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                        aria-selected="false">나의 장점</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                        aria-selected="false">나의 협업 스타일</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                    aria-labelledby="nav-home-tab" tabindex="0">
                    <br>
                    <h2>나의 성격</h2>
                    <p style="font-size: 20px;">
                        저의 성격은 소심하지만 긍정적이고, 무엇이든 시간을 들여 노력하는 편입니다.<br>
                        사람들과 대화하는 게 서툴고 어렵지만 이것 역시 최대한 많은 사람들과 소통하려고 노력하고 있습니다.<br>
                        그리고 문제가 발생하면 그 문제에 대해서 최대한 긍정적으로 생각하되 <br>
                        그 문제를 해결하기 위해 거기에 몰입하고 시간을 들여 노력합니다.<br>
                    </p> <br>
                    <h2>나의 MBTI</h2>
                    <p style="font-size: 20px;">
                        저의 MBTI는 <b>ISFJ</b> 입니다. 위에서 말한 것처럼 내향적인 성향이기에 I 이고, <br>
                        현재에 초점을 두고 생각하기에 S, 어떤 상황에 대해 감성적이기에 F,<br>
                        최대한 무엇이든 계획적으로 이루어지길 원하기에 J 라는 결과가 나왔습니다.<br>
                    </p>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel"
                    aria-labelledby="nav-profile-tab" tabindex="0">
                    <br>
                    <p style="font-size: 20px;">
                        나의 장점은 끈기 있게 도전하는 것입니다. <br>
                        새로운 목표를 세웠을 때, 그것을 이루기 위해 끝까지 포기하지 않고 <br>
                        노력하는 태도는 내가 가진 가장 큰 덕목 중 하나입니다. <br>
                        어려움이 닥쳤을 때 쉽게 좌절하지 않고, 그 상황을 극복하기 위해 <br>
                        다양한 방법을 모색하며, 실패를 두려워하지 않습니다. <br>
                        이런 저의 태도는 학업이나 일상생활에서도 큰 장점으로 작용합니다.<br>
                        <br>
                        예전에 대학에서 프로젝트를 진행할 때, 프론트를 진행할 사람이 없어서<br>
                        제가 맡아서 진행한 적이 있습니다. 이 때 저는 프론트 영역을 처음이었고<br>
                        그래서 React를 따로 공부하면서 프로젝트를 진행했습니다.<br>
                        이 과정에서 필요한 새로운 지식을 습득하고, 문제 해결 능력을 키우며, <br>
                        팀원들과의 협력을 통해 공동의 목표를 달성하는 등, <br>
                        끈기 있는 도전은 저를 더욱 성장하게 만들었습니다.<br>
                        <br>
                        결국, 이러한 저의 태도는 무엇이든 이룰 수 있다는 자신감을 심어주며, <br>
                        주변 사람들에게도 긍정적인 영향을 미칩니다. <br>
                        따라서, 저는 앞으로도 변함없이 도전하는 정신으로 삶의 다양한 분야에서 <br>
                        끊임없이 발전해 나갈 것입니다.
                    </p>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel"
                    aria-labelledby="nav-contact-tab" tabindex="0">
                    <br>
                    <p style="font-size: 20px;">
                        나의 협업 스타일은 팀원과 자주 소통하면서 피드백 받는 것입니다. <br>
                        프로젝트를 진행하면서, 저는 의견 교환의 중요성을 높이 평가합니다. <br>
                        이를 통해 다양한 관점을 이해하고, 프로젝트의 방향성을 보다 명확히 <br>
                        잡을 수 있다고 믿습니다.<br>
                        <br>
                        정기적인 미팅을 통해 팀원들과 진행 상황을 공유하고, <br>
                        각자의 의견을 적극적으로 듣습니다. <br>
                        또한, 피드백을 적극적으로 요청하고 수용함으로써, <br>
                        프로젝트의 질을 향상시키고, 개인의 성장에도 기여합니다.<br>
                        <br>
                        저는 이러한 소통 과정에서 생기는 시너지를 중요하게 생각하며, <br>
                        팀 내에서 긍정적인 분위기를 조성하는 데에도 힘씁니다. <br>
                        서로의 아이디어를 존중하고, 문제 해결을 위해 협력하는 환경에서 <br>
                        최고의 결과를 도출할 수 있다고 확신합니다. <br>
                        이와 같은 협업 스타일을 통해, 저는 팀과 함께 성장하며 <br>
                        목표를 달성해 나가고자 합니다.
                    </p>
                </div>
            </div>
            <!-- 댓글 기능 구현 -->
            <hr class="border border-success border-3" style="margin-bottom: 20px;">
            <div class="comment_box">
                <div class="comment_input_box">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control comment_name" id="floatingInput" placeholder="홍길동">
                        <label for="floatingInput" style="font-size: 20px;">이름</label>
                      </div>
                    <div class="form-floating">
                        <textarea class="form-control comment_textarea" placeholder="Leave a comment here"
                            id="floatingTextarea2" style="height: 100px;"></textarea>
                        <label for="floatingTextarea2" style="font-size: 20px;">응원 한 마디 남겨주세요!!</label>
                    </div>
                    <button type="button" class="btn btn-primary comment_btn">등록하기</button>
                </div>
                <hr class="border border-dark border-2">
                <div class="comment_list">
                    <div class="comment">
                        <div class="comment_left">
                            <div class="commenter_info">
                                <img class="comment_img" src="./imgs/comment_img.png">
                                <div class="commenter_and_time">
                                    <p class="commenter">홍길동</p>
                                    <p class="comment_time">2024-04-17 WED</p>
                                </div>
                            </div>
                            <div class="comment_content">
                                <p>다들 화이팅입니다!!!</p>
                            </div>
                        </div>
                        <div class="comment_right">
                            <button type="button" class="btn btn-outline-danger">삭제</button>
                        </div>
                    </div>
                    <hr class="border border-dark border-2" style="width: 648px;margin-left: -10px;">
                </div>
            </div>

        </div>

    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
</div>
</div>`)

//홍성빈
const modal2= $("#exampleModal2").html (``)

//엄혜원
const modal3= $("#exampleModal3").html (``)

//이장현
const modal4= $("#exampleModal4").html (``)

//박순호
const modal5= $("#exampleModal5").html (``)

// // Modal 열기
// function openModal(modalname) {
//     document.get
//     $("#" + modalname).css('display', 'block');
// }

// // Modal 영역 밖을 클릭하면 Modal을 닫습니다.
// window.onclick = function (event) {
//     if (event.target.className == "modal") {
//         event.target.style.display = "none";
//     }
// };
