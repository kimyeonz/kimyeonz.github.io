// CV 다운로드 — 이 페이지를 브라우저가 직접 PDF로 렌더링한다.
// 다시 그리지 않으므로 글꼴(Georgia)·줄바꿈·여백이 화면과 완전히 동일하고,
// 내용을 고치면 CV도 자동으로 따라간다.
// 인쇄에서 빼는 항목(사진·News·About 문단 등)은 css/style.css 의 @media print 참고.

const cvBtn = document.getElementById('cv-download');
if (cvBtn) {
  cvBtn.addEventListener('click', e => {
    e.preventDefault();
    const original = document.title;
    document.title = 'CV_Hyeonseung_Kim';   // 저장 파일명의 기본값이 된다
    const restore = () => { document.title = original; };
    window.addEventListener('afterprint', restore, { once: true });
    setTimeout(restore, 60000);             // afterprint 미지원 브라우저 대비
    window.print();
  });
}
