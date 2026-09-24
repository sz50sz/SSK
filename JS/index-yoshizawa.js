const locations = [
    {
        name: "○○大学",
        lat: 35.123,
        lng: 136.123,
        address: "岐阜県○○市○○町",
        hours: "平日 9:00〜17:00",
        stock: "○",
    },
    {
        name: "○○市役所",
        lat: 35.456,
        lng: 136.456,
        address: "岐阜県○○市○○町",
        hours: "平日 8:30〜17:15",
        stock: "△",
    },
];


// =========================================================
// 地図
// =========================================================

const map = L.map("map").setView(
    [35.4233, 136.7606],
    13
);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors",
    }
).addTo(map);


// =========================================================
// 詳細パネル
// =========================================================

const detail =
    document.querySelector("#location-detail");

const detailName =
    document.querySelector("#location-detail-name");

const detailHours =
    document.querySelector("#location-detail-hours");

const detailAddress =
    document.querySelector("#location-detail-address");

const detailStock =
    document.querySelector("#location-detail-stock");

const detailClose =
    document.querySelector("#location-detail-close");

const detailMapButton =
    document.querySelector("#location-detail-map-button");


// 現在選択している設置場所
let selectedLocation = null;


// =========================================================
// 在庫表示
// =========================================================

function getStockText(stock) {

    if (stock === "○") {
        return "在庫あり";
    }

    if (stock === "△") {
        return "残りわずか";
    }

    if (stock === "×") {
        return "在庫なし";
    }

    return "在庫状況不明";
}


// =========================================================
// 詳細を表示
// =========================================================

function showLocationDetail(location) {

    selectedLocation = location;

    detailName.textContent =
        location.name;

    detailHours.textContent =
        location.hours;

    detailAddress.textContent =
        location.address;


    detailStock.textContent =
        `${location.stock} ${getStockText(location.stock)}`;


    // 在庫状態によってクラスを変更
    detailStock.className =
        `map__detail-stock map__detail-stock--${location.stock}`;


    // 詳細パネルを表示
    detail.hidden = false;

}


// =========================================================
// 詳細を閉じる
// =========================================================

detailClose.addEventListener(
    "click",
    () => {

        detail.hidden = true;

        selectedLocation = null;

    }
);


// =========================================================
// Google Mapsで表示
// =========================================================

detailMapButton.addEventListener(
    "click",
    () => {

        if (!selectedLocation) {
            return;
        }


        const url =
            `https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`;


        window.open(
            url,
            "_blank"
        );

    }
);


// =========================================================
// マーカーを作成
// =========================================================

locations.forEach((location) => {

    const marker = L.marker([
        location.lat,
        location.lng,
    ]).addTo(map);


    marker.on(
        "click",
        () => {

            showLocationDetail(location);

        }
    );

});


// =========================================================
// 現在地を取得
// =========================================================

if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(

        (position) => {

            const currentLat =
                position.coords.latitude;

            const currentLng =
                position.coords.longitude;


            // 現在地マーカー
            L.marker([
                currentLat,
                currentLng,
            ])
                .addTo(map)
                .bindPopup("現在地");


            // 現在地を中心にする
            map.setView(
                [currentLat, currentLng],
                14
            );

        },

        () => {

            console.log(
                "現在地を取得できませんでした"
            );

        }

    );

}

map.on("click", () => {

    detail.hidden = true;

    selectedLocation = null;

});