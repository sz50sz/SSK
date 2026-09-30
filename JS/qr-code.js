// QRコードのモーダルウィンドウ
const openButton = document.querySelector(".main__takeout-btn");
const modal = document.querySelector("#qr-modal");
const closeButton = document.querySelector(".qr-modal__close");
const qrContainer = document.querySelector("#qr-code");

openButton.addEventListener("click", async () => {
    modal.hidden = false;
    qrContainer.textContent = "QRコードを発行しています…";

    try {
        const response = await fetch("/api/qr-codes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("QRコードを発行できませんでした");
        }

        const { url } = await response.json();

        qrContainer.replaceChildren();
        new QRCode(qrContainer, {
            text: url,
            width: 200,
            height: 200
        });
    } catch (error) {
        console.error(error);
        qrContainer.textContent = "QRコードを発行できませんでした";
    }
});


closeButton.addEventListener("click", () => {
    modal.hidden = true;
});