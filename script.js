const card = document.querySelector(".card");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left -rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -y / 10;
    const rotateY = x / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
});
