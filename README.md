# 1986 원흥점 머신 사용 가이드

블랙/차콜 + 아이보리 + 샴페인 베이지. HTML/CSS/JS 정적 사이트.

## 실행
이 폴더에서 `python3 -m http.server 8766 --bind 127.0.0.1 --directory dist` 실행 후 http://127.0.0.1:8766 접속. dist/index.html 직접 열기도 지원합니다.

## 등록된 머신
1. T바 로우
2. 해머 플라이
3. 바이킹 프레스
4. 라이프 피트니스 앱도미널
5. 라이프 피트니스 트라이셉 익스텐션
6. 라이프 피트니스 바이셉 컬

사용자 사진 순서와 팁을 보존했습니다. 배경 제거 PNG는 dist/assets에 저장. 기본 설정과 3단계 사용법의 출처는 CONTENT_SOURCES.md 및 각 상세 안내 하단에 있습니다. T바 로우와 바이킹 프레스는 정확한 실기 모델 설명서가 아닌 공통 동작 참고입니다.

## 확인
JS 구문, 6개 이미지 로드, 상세 화면 열기/닫기, 모바일 390px 긴 제목과 사진 표시 확인. 모든 이미지 RGBA PNG. 별도 빌드 과정 없음. 공개 사이트: https://1986fitnessk.github.io/1986-wonheung-machine-guide/

저장소: https://github.com/1986fitnessk/1986-wonheung-machine-guide

공통 QR에는 위 공개 사이트 주소를 사용합니다.

## GitHub Pages 배포
공개 소스에는 서비스 파일과 누끼 처리된 머신 사진만 포함하며 원본 사진, 로컬 검수 화면, 비밀정보는 제외합니다.

`main`은 소스, `gh-pages`는 `dist` 배포 결과입니다. 변경 후 커밋하고 `sh deploy.sh`를 실행합니다. GitHub CLI 인증 및 저장소 쓰기 권한이 필요합니다. 출처는 각 머신 상세의 참고 자료에서도 확인할 수 있습니다.
