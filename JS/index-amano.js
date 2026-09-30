// 次に受け取れるまでの残り時間
const timer = document.querySelector("#timer");

if (timer) {
    const duration = 5 * 60;
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
}

// 取り出す方法モーダル
const methodModal = document.querySelector("#method-modal");
const methodModalClose = document.querySelector(".main__method-modal-close");
const methodSlides = [...document.querySelectorAll(".main__method-slide")];
const methodDots = [...document.querySelectorAll(".main__method-dot")];
const methodBack = document.querySelector(".main__method-back");
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

    const isFirstPage = index === 0;
    const isLastPage = index === methodSlides.length - 1;

    methodBack.hidden = isFirstPage;
    methodNext.textContent = isLastPage ? "完了" : "次へ";
    methodNext.classList.toggle("is-complete", isLastPage);
}

document.querySelectorAll(".main__method").forEach((button) => {
    button.addEventListener("click", () => {
        showMethodPage(0);
        methodModal.hidden = false;
    });
});

methodBack.addEventListener("click", () => {
    if (currentMethodPage > 0) {
        showMethodPage(currentMethodPage - 1);
    }
});

methodNext.addEventListener("click", () => {
    if (currentMethodPage === methodSlides.length - 1) {
        methodModal.hidden = true;
    } else {
        showMethodPage(currentMethodPage + 1);
    }
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
    if (event.key === "Escape" && methodModal && !methodModal.hidden) {
        methodModal.hidden = true;
    }
});