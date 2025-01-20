
// 현재 날짜 시간 업데이트
{
    const days = ['일', '월', '화', '수', '목', '금', '토', '일'];
    const $clock = document.getElementById('clock');
    const $date = $clock.querySelector(':scope > .date');
    const $md = $date.querySelector(':scope > .md');
    const $day = $date.querySelector(':scope > .day');
    const $time = $clock.querySelector(':scope > .time');
    const $hour = $time.querySelector(':scope > .hour')
    const $minute = $time.querySelector(':scope > .minute')

    const applyDateTime = () => {

        const date = new Date();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const md = `${month}월 ${day}일`;
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        $hour.innerText = hour;
        $minute.innerText = minute;
        $md.innerText = md;
        $day.innerText = `(${days[date.getDay()]})`;


    };
    applyDateTime();
    setInterval(applyDateTime, 1000);
}
// 모달 구현
// 모달 구현
const $main = document.getElementById('mac-main');
const $display = document.getElementById('display');
const $appButtons = document.querySelectorAll('.app');
const $modals = document.querySelectorAll('.modal');

$appButtons.forEach(($appButton, index) => {
    $appButton.onclick = (e) => {
        e.stopPropagation();  // 여기서 클릭 이벤트 전파를 막음
        const $modal = $modals[index];
        $modal.classList.add('-visible');  // 모달을 보이게 함
        $display.classList.add('-visible'); // display도 보이게 함
    };
});

// $main 클릭 시 모든 모달을 닫음
$main.onclick = () => {
    $modals.forEach(($modal) => {
        $modal.classList.remove('-visible');  // 모달을 숨김
    });
    $display.classList.remove('-visible');  // display 숨김
};

// 모달 클릭 시 이벤트 전파를 막음 (모달 내부를 클릭해도 모달이 닫히지 않게 함)
$modals.forEach(($modal) => {
    $modal.onclick = (e) => {
        e.stopPropagation();  // 모달 내부에서 발생한 클릭 이벤트의 전파를 막음
    };
});








