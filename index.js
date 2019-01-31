function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li');
  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let next = node.children[0];
  while (next) {
    node = next;
    next = next.children[0];
  }
  return node;
}

function recurse(elements) {
  if (element.innerText === 'boo!') {
    return element;
  } else {
    recurse(element);
  }
}
