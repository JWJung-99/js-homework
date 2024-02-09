![image](https://github.com/JWJung-99/js-homework/assets/84115816/27ac2948-97a8-47e9-9163-7713388ddf09)# 네이버 로그인 페이지 구현

<p align="center"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/407c804d-994c-41f5-bcbc-5e0fb64784b6"></p>

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

<p align="center"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/044757b8-e333-4aca-8c3d-7fc1805419e7"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/cb44f582-0190-4817-a086-619675b31bb8"></p>

2. 로그인 실패

- 입력한 아이디가 이메일 형식이 아니라면 "아이디를 이메일 형식으로 입력해주세요." 라고 경고합니다.

<p align="center"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/f2e54fd5-551f-4426-a162-294e41007665">
</p>

<br>

- 입력한 비밀번호가 비밀번호 조건에 맞지 않으면 "비밀번호는 6~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요." 라고 경고합니다.

<p align="center"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/768842af-b87c-4709-8b49-20170d6e4c51"></p>

<br>

- 아이디 또는 비밀번호 형식이 아닌 상태에서 로그인 버튼을 클릭하면 아이디 또는 비밀번호 입력창을 초기화합니다.

<p align="center"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/14f1c099-2eb8-432b-a1e3-2a7f30a9828b"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/ab045b67-c41c-4ba1-80b2-a68e11add873"></p>

<br>

- 아이디를 입력하지 않고 로그인 버튼을 클릭하면 "아이디를 입력하세요." 라고 경고합니다.

<p align="center"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/9fc9340b-e54b-4507-bb5e-419aec07e76c"></p>

<br>

- 비밀번호를 입력하지 않고 로그인 버튼을 클릭하면 "비밀번호를 입력하세요." 라고 경고합니다.

<p align="center"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/41524742-b55b-4b3d-b72e-b9a303d4e472"></p>


<br>

- 입력한 아이디와 비밀번호가 일치하지 않으면 "아이디 또는 비밀번호를 잘못 입력하셨습니다. 다시 확인해 주세요!" 라고 경고하고 아이디, 비밀번호 입력창을 초기화합니다.

<p align="center"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/f2ec97bc-bcfe-4f37-892d-6cd4e4689321"><img height="250" alt="image" src="https://github.com/JWJung-99/js-homework/assets/84115816/9ad53b71-bd6f-49c1-a385-1024856eb87d"></p>
