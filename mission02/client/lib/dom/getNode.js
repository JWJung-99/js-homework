export function getNode(node, context = document) {
  if (typeof node !== 'string') {
    throw new TypeError('getNode 함수의 첫 번째 인수는 문자형이어야 합니다.');
  }

  if (context.nodeType !== document.DOCUMENT_NODE) {
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}

export function getNodes(node, context = document) {
  if (typeof node !== 'string') {
    throw new TypeError('getNodes 함수의 첫 번째 인수는 문자형이어야 합니다.');
  }

  if (context.nodeType !== document.DOCUMENT_NODE) {
    context = document.querySelector(context);
  }

  return context.querySelectorAll(node);
}