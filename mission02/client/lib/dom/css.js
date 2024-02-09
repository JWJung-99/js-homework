import {getNode} from './getNode.js';

export function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (!className) throw new Error('addClass 함수의 두 번째 인수는 필수 입력 값입니다.');

  if (typeof className !== 'string') throw new TypeError('addClass 함수의 두 번째 인수는 문자형이어야 합니다.');

  node.classList.add(className);
}

export function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') throw new TypeError('removeClass 함수의 두 번째 인수는 문자형이어야 합니다.');

  node.classList.remove(className);
}


export const css = (function (){

  function getCss(node, prop) {
    if (typeof node === 'string') node = getNode(node);
  
    if (!(prop in document.body.style)) throw new Error('getCss 함수의 두 번째 인수가 유효한 css 속성값이 아닙니다.');
  
    return getComputedStyle(node).getPropertyValue(prop);
  }

  function setCss(node, prop, value) {
    if (typeof node === 'string') node = getNode(node);
  
    if (!(prop in document.body.style)) throw new Error('setCss 함수의 두 번째 인수가 유효한 css 속성값이 아닙니다.');
  
    if (!value) throw new Error('setCss의 함수의 세 번째 인수는 필수 입력값입니다.');
  
    node.style[prop] = value; 
  }

  const css = (node, prop, value) => (!value) ? getCss(node, prop) : setCss(node, prop, value);

  return css;

})()