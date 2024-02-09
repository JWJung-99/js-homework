# 네이버 로그인 페이지 구현

<p align="center"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/e4f8d5ea-a5f4-40f3-99fb-2917a6e1aa79"></p>

<br><br>

## 1. 프로젝트 개요
<br>
아이디와 비밀번호를 정확히 입력했을 때 welcome 페이지로 이동하는 페이지를 구현합니다.

<br><br>

## 2. 프로젝트 정보
<br>

- 개발 인원 : 1명
- 개발 기간 : 24/02/03 ~ 24/02/04 (약 2일 간)

<br><br>

## 3. 프로젝트 설명
<br>

- 재사용 가능한 함수를 분리하고 함수를 중심의 설계
- 정규 표현식을 이용한 조건 처리
- 사용자 input을 통해 입력 받은 값의 상태 관리
- 사용자 입력이 적절하지 않을 시 에러 처리

<br><br>

## 4. 프로젝트 구조
<br>


```
js-homework
└─ mission01
   ├─ README.md
   ├─ assets
   │  ├─ error.gif
   │  ├─ keyboard.gif
   │  ├─ link.gif
   │  ├─ mouse.gif
   │  └─ rwd.gif
   ├─ css
   │  ├─ fonts.css
   │  └─ style.css
   ├─ fonts
   │  ├─ LICENSE_OFL.txt
   │  ├─ SpoqaHanSansBold.woff
   │  ├─ SpoqaHanSansBold.woff2
   │  ├─ SpoqaHanSansLight.woff
   │  ├─ SpoqaHanSansLight.woff2
   │  ├─ SpoqaHanSansRegular.woff
   │  ├─ SpoqaHanSansRegular.woff2
   │  ├─ SpoqaHanSansThin.woff
   │  ├─ SpoqaHanSansThin.woff2
   │  └─ glyphs.txt
   ├─ images
   │  ├─ icon-checked.svg
   │  ├─ icon-unchecked.svg
   │  ├─ ip-security.png
   │  ├─ logo.png
   │  └─ logo.svg
   ├─ index.html
   ├─ js
   │  └─ main.js
   └─ welcome.html

```

<br><br>

## 5. 실행 가이드
<br>
1. vscode에서 degit 명령어를 사용해 저장소 파일을 내 폴더로 복사합니다.

```
npx degit https://github.com/JWJung-99/js-homework.git mission01
```
<br>
2. Go Live를 이용해 실행합니다.

<br><br>
3. 아이디에 `asd@naver.com`, 비밀번호에 `spdlqj123!@`를 입력하면 로그인이 완료됩니다.

<br><br>

## 6. 주요 기능

1. 로그인 성공

- 정확한 아이디와 비밀번호를 입력 후 로그인 버튼을 클릭하면, welcome 페이지로 이동합니다.

<p align="center"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/ba31deda-2392-4cac-ac04-e926e87067c8"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/566570b4-f148-4227-b75d-c230c0a69096"></p>

2. 로그인 실패

- 입력한 아이디가 이메일 형식이 아니라면 "아이디를 이메일 형식으로 입력해주세요." 라고 경고합니다.

<p align="center"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/a8c922a3-1d50-4998-a132-4f4243155bfc">
</p>

- 입력한 비밀번호가 비밀번호 조건에 맞지 않으면 "비밀번호는 6~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요." 라고 경고합니다.

<p align="center"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/ad619b3a-43a4-42b3-abb2-524ac2cdb8bd"></p>

- 아이디 또는 비밀번호 형식이 아닌 상태에서 로그인 버튼을 클릭하면 아이디 또는 비밀번호 입력창을 초기화합니다.

<p align="center"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/4b11590c-6b37-4879-a4fd-9154dcbcea1b"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/8b5bb673-673b-4149-ab46-4744b00aa878"></p>

<br>

- 아이디를 입력하지 않고 로그인 버튼을 클릭하면 "아이디를 입력하세요." 라고 경고합니다.

<p align="center"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/b66bb158-771b-405b-973c-d1a4ded3487a"></p>

- 비밀번호를 입력하지 않고 로그인 버튼을 클릭하면 "비밀번호를 입력하세요." 라고 경고합니다.

<p align="center"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/ad4aa7f2-bbd8-4b0b-97f2-4edff1aa5dc5"></p>

<br>

- 입력한 아이디와 비밀번호가 일치하지 않으면 "아이디 또는 비밀번호를 잘못 입력하셨습니다. 다시 확인해 주세요!" 라고 경고하고 아이디, 비밀번호 입력창을 초기화합니다.

<p align="center"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/ac6d50f2-0db4-4477-8cdf-9bb4afb3f562"><img width="350" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/aaf1d181-228e-4e4a-b032-7873d15d662a"></p>
