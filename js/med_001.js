// 검진 내역 샘플 데이터
const data = [
    { date: "2022-11-23", department: "정형외과", hospital: "광명성애병원" },
    { date: "2022-11-24", department: "정형외과", hospital: "서울성모병원" },
    { date: "2022-11-25", department: "정형외과", hospital: "강북삼성병원" },
    { date: "2022-11-26", department: "정형외과", hospital: "건국대학교병원" },
    { date: "2022-11-27", department: "정형외과", hospital: "이대서울병원" },
    { date: "2022-11-24", department: "정형외과", hospital: "서울성모병원" },
    { date: "2022-11-25", department: "정형외과", hospital: "강북삼성병원" },
    { date: "2022-11-26", department: "정형외과", hospital: "건국대학교병원" },
    { date: "2022-11-27", department: "정형외과", hospital: "이대서울병원" }
];

// 카드 두 개 대상
const scrollAreasRight = document.querySelectorAll('.scroll-area-right');



// 각 카드에 데이터 삽입
scrollAreasRight.forEach((area, idx) => {
    area.innerHTML = ''; // 기존 제거
    data.forEach(record => {
        const recordDiv = document.createElement('div');
        recordDiv.className = 'record right';
        recordDiv.innerHTML = `
    <div class="detail">
      <div class="record-date">${record.date}</div>
      <div class="record-hospital">${record.hospital}</div>
      <div class="record-department">${record.department}</div>
      <button class="record-button">상세보기</button>
    </div> 
    `;
        area.appendChild(recordDiv);
    });
});



// ✅ 오른쪽 카드 스크롤 위치 기억
scrollAreasRight.forEach((area, index) => {
    const storageKey = `scrollPosRight_${index}`;
    // 이전 위치 불러오기
    const saved = localStorage.getItem(storageKey);
    if (saved) {
        area.scrollTop = parseInt(saved, 10);
    }

    // 변경 감지 시 저장
    area.addEventListener('scroll', () => {
        localStorage.setItem(storageKey, area.scrollTop);
    });
});



