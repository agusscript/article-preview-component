const $shareCard = document.querySelector(".share_card");
const $shareButton = document.querySelector(".share-btn")

$shareButton.onclick = showShareCard;

function showShareCard() {
    $shareCard.classList.toggle("share-card");
}