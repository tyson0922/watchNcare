document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card-container");
    const addPersonBtn = document.getElementById("add-person-btn");
    const personCount = document.getElementById("person-count");
    let count = 0;

    function createCard(name, healthCheckDate, hospitalVisitDate) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${name}</h3>
            <p>최근 건강검진 : ${healthCheckDate}</p>
            <p>최근 병원진료 : ${hospitalVisitDate}</p>
        `;
        return card;
    }

    function updatePersonCount() {
        if (count === 0) {
            personCount.textContent = "인원 추가 버튼을 눌러주세요";
        } else {
            personCount.textContent = `${count}명`;
        }
    }

    addPersonBtn.addEventListener("click", () => {
        count++;
        const newCard = createCard("홍석진", "2023-12-12", "2025-03-02");
        cardContainer.appendChild(newCard);
        updatePersonCount();
    });

    // 초기 상태
    updatePersonCount();
});
