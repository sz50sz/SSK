// QRコードのモーダルウィンドウ
const openButton = document.querySelector(".main__takeout-btn");
const modal = document.querySelector("#qr-modal");
const closeButton = document.querySelector(".qr-modal__close");

openButton.addEventListener("click", () => {
    modal.hidden = false;
});

closeButton.addEventListener("click", () => {
    modal.hidden = true;
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.hidden = true;
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
        modal.hidden = true;
    }
});


// 次受け取れるまでの残り時間
const timer = document.querySelector("#timer");
const duration = 5 * 60; // 5時間を分に換算
const startedAt = Date.now();

function updateTimer() {
    const elapsedMinutes = Math.floor((Date.now() - startedAt) / 60000);
    const remaining = duration - (elapsedMinutes % duration);

    const hours = Math.floor(remaining / 60);
    const minutes = remaining % 60;

    timer.textContent = `${hours}:${String(minutes).padStart(2, "0")}`;
}

updateTimer();
setInterval(updateTimer, 1000);


// 取り出す方法モーダルウィンドウ
const methodModal = document.querySelector("#method-modal");
const methodModalClose = document.querySelector(".main__method-modal-close");
const methodSlides = [...document.querySelectorAll(".main__method-slide")];
const methodDots = [...document.querySelectorAll(".main__method-dot")];
const methodNext = document.querySelector(".main__method-next");

let currentMethodPage = 0;

function showMethodPage(index) {
    currentMethodPage = index;

    methodSlides.forEach((slide, i) => {
        slide.classList.toggle("is-active", i === index);
    });

    methodDots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
    });

    methodNext.textContent =
        index === methodSlides.length - 1 ? "完了" : "次へ";
}

document.querySelectorAll(".main__method").forEach((button) => {
    button.addEventListener("click", () => {
        showMethodPage(0);
        methodModal.hidden = false;
    });
});

methodNext.addEventListener("click", () => {
    if (currentMethodPage === methodSlides.length - 1) {
        methodModal.hidden = true;
        return;
    }

    showMethodPage(currentMethodPage + 1);
});

methodModalClose.addEventListener("click", () => {
    methodModal.hidden = true;
});

methodModal.addEventListener("click", (event) => {
    if (event.target === methodModal) {
        methodModal.hidden = true;
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        methodModal.hidden = true;
    }
});