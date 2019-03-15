export default class Siblings {
  constructor(elem) {
  }
  
  static all(elem) {
    let siblings = [];
    elem = elem.parentNode.firstChild;
    do {
      if (elem.nodeType === 1) siblings.push(elem);
    } while (elem = elem.nextElementSibling);
    return siblings;
  }
  
  static next(elem) {
    let siblings = [];
    while (elem = elem.nextElementSibling) {
      if (elem.nodeType === 1) siblings.push(elem);
    }
    return siblings;
  }
  
  static prev(elem) {
    let siblings = [];
    while (elem = elem.previousElementSibling) {
      if (elem.nodeType === 1) siblings.push(elem);
    }
    return siblings;
  }
}