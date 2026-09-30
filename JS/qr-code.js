// QRコードのモーダルウィンドウ
const openButton = document.querySelector(".main__takeout-btn");
const modal = document.querySelector("#qr-modal");
const closeButton = document.querySelector(".qr-modal__close");
const qrContainer = document.querySelector("#qr-code");

openButton.addEventListener("click", () => {
    modal.hidden = false;

    let deviceId = localStorage.getItem("sotto-device-id");

    if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem("sotto-device-id", deviceId);
    }

    qrContainer.replaceChildren();

    new QRCode(qrContainer, {
        text: deviceId,
        width: 200,
        height: 200
    });
});

closeButton.addEventListener("click", () => {
    modal.hidden = true;
});


closeButton.addEventListener("click", () => {
    modal.hidden = true;
});