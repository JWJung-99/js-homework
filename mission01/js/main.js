
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

// email & password reg exp
function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// manage state
function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}


// 일반 자바스크립트에서는 가독성 글쎼...
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


// common error message handler
// node
function handleEmailError(item, isValid) {
  if (!isValid) {
    item.classList.add('is--invalid');
    document.querySelector('#userEmailError').textContent = '아이디를 이메일 형식으로 입력해주세요.'
  } else {
    item.classList.remove('is--invalid');
  }
}

function handlePwError(item, isValid) {
  if (!isValid) {
    item.classList.add('is--invalid');
    // 여러 번 호출할 거면 변수로 만들어서 관리
    document.querySelector('#userPasswordError').textContent = '비밀번호는 6~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.'
  } else {
    item.classList.remove('is--invalid');
  }
}

// email validation
function handleUserEmail() {
  const isValid = emailReg(this.value);

  handleEmailError(this, isValid);

  setEmail(this.value);
}

const $userEmail = document.querySelector('#userEmail');
$userEmail.addEventListener('input', handleUserEmail);


// password validation
function handleUserPassword() {
  const isValid = pwReg(this.value);

  handlePwError(this, isValid);

  setPassword(this.value);
}

const $userPassword = document.querySelector('#userPassword');
$userPassword.addEventListener('input', handleUserPassword);


// handle submit
function handleSubmit(e) {
  e.preventDefault();

  if (!hasInputError()) {
    window.location.href = 'welcome.html';
  }
}

function hasInputError() {
  if (email() === user.id && password() === user.pw) {
    return false;
  } else {
    handleInputError();
    return true;
  }
}


// 프로젝트 기본적인 내용과 어떤 스택, 기술을 사용했는지 같이 명시하기
// 실행가이드 degit --> 클론이나 다운로드는 알고 있다고 가정,, 굳이 쓸거면 서버 구동하는 방법부터 작성 (써도 그만 안 써도 그만
// 폴더 구조는 굳이 싶지만 없는 것보다는 나을 수도...
// 배포단이라면 노드 패키지 다운 받는 방법을 명시해주면 좋음 (npm i , npm run dev)
// 포트폴리오라면 어떤 기술을 써서 어떤 기능을 구현을 했고, 실제로 얼마나 개선을 했고 호환성이 향상되었는지 정돈해 두는 것이 중요



// 가장 먼저 체크할 것부터 else if로 체크하거나, switch 문을 활용하여 뎁스를 낮추기 --> 콜백 지옥에 빠질 위험
function handleInputError() {
  if (email() === '') {
    userEmail.classList.add('is--invalid');
    document.querySelector('#userEmailError').textContent = '아이디를 입력하세요.'
  } else if (password() === '') {
    userPassword.classList.add('is--invalid');
    document.querySelector('#userPasswordError').textContent = '비밀번호를 입력하세요.'
  } else {
    if (!emailReg(email())) {
      userEmail.classList.add('is--invalid');
      userEmail.value = '';
      setEmail('');
    } else {
      if (!pwReg(password())) {
        userPassword.classList.add('is--invalid');
        userPassword.value = '';
        setPassword('');
      } else {
        userPassword.classList.add('is--invalid');
        document.querySelector('#userPasswordError').textContent = '아이디 또는 비밀번호를 잘못 입력하셨습니다. 다시 확인해 주세요!';
        userEmail.value = '';
        userPassword.value = '';
        setEmail('');
        setPassword('');
      }
    }
  } 
}

const submitButton = document.querySelector('.btn-login');
submitButton.addEventListener('click', handleSubmit);