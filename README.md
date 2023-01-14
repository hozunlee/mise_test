# 🔖내신&수능 단어장

## 🤝 과제 
- 단어장 기능 구현
- 기간: 2023.01.11 - 01.14

## ⚡️ 프로젝트 실행 방법

```
npm install
npm run start
```



## 🎬 기능 소개


<img src = "https://user-images.githubusercontent.com/60101732/212450219-4d01bbfb-94ad-4d53-8ede-fbd9ac543fdb.gif" width="50%" height="height 50%">

💡단어 옆 클릭 시 번역 단어 표시

💡Show button 클릭 시 모든 단어 표시

💡단어장 우측 슬라이드 시 ( X | O | 암기완료 버튼 ) 구현

💡status 정렬 버튼 클릭 시 정렬 기능 구현

💡status 더보기 버튼 클릭 시 단어 <-> 뜻 반전 구현
 - 암기 완료 상태일 때는 단어장 무작위 
 
💡status 학습 진행 bar 구현

💡Loading 기능 구현 

## 👨‍👩‍👧‍👦 개발자 소개

<table>
<tr>
    <td align="center">
        <a href="https://github.com/hozunlee">
        <img src="https://avatars.githubusercontent.com/u/60101732?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@hozunlee</b></sub>
        <br />
        <sub><b>이호준</b></sub>
        </a>
    </td>
    
</tr>
</table>



## 🌲 src 폴더 구조
```
src
 ┣ components
 ┃ ┣ Nav.jsx
 ┃ ┣ Status.jsx
 ┃ ┣ Item.jsx
 ┃ ┣ Card.jsx
 ┃ ┣ SortDetail.jsx
 ┃ ┣ ChangeWordDetail.jsx
 ┃ ┣ Loading.jsx
 ┃ ┗ TopButton.jsx
 ┣ utils
 ┃ ┗ store.js
 ┣ App.js
 ┣ index.css
 ┗ index.js

 
```


## ⚒️ 기술 스택 / 라이브러리

Javascirpt, React, tailwindCSS, recoil
axios, remixicon, swiper, classnames, react-spinners

## 📝 Commit message Convention 전략

- commit message


| Type             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| feat             | 새로운 기능 추가                                             |
| fix              | 버그 수정                                                    |
| docs             | 문서 주석                                                    |
| style            | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우     |
| refactor         | 코드 리팩터링                                                |
| chore            | 빌드 업무 수정, 패키지 매니저 수정(프로덕션 코드 변경 X)     |



