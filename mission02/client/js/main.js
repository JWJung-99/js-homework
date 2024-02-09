
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import {getNode, getNodes, addClass, removeClass, attr, css} from '../lib/index.js';
import data from './data.js';


const nav = getNode('.nav');
const nickName = getNode('.nickName');
const visualImage = getNode('.visual img');
const body = getNode('body');
const list = [...getNodes('.nav li')];


function setBgColor(index) {
  css(body, 'background', `linear-gradient(to bottom, ${data[index].color[0]},${data[index].color[1]})`);
}

function setImage(index) {
  attr(visualImage, 'src', `./assets/${data[index].name.toLowerCase()}.jpeg`);
  attr(visualImage, 'alt', data[index].alt);
}

function setNameText(index) {
  nickName.textContent = data[index].name;
}

function handleSlide(e) {
  e.preventDefault();

  const target = e.target.closest('li');

  if (!target) return;

  list.forEach(li => removeClass(li, 'is-active'));
  addClass(target, 'is-active');

  const index = target.dataset.index - 1;
  
  setBgColor(index);
  setImage(index);
  setNameText(index);
}


nav.addEventListener('click', handleSlide);