/*
var name = prompt('Введите имя пользователя: ', '').toLowerCase();
var getName = (msg) => msg.children[1].children[0].children[0].children[0].textContent.trim().toLowerCase();

function remove() {
  document.querySelectorAll('.im-mess-stack._im_mess_stack').forEach((msg) => {
    getName(msg) !== name && msg.remove();
  });
}

remove();
document.onkeydown = function keydown(evt) {
  if (evt.shiftKey && (evt.keyCode || evt.code) === 9) {
    remove();
  }
};
*/

// one line 
javascript: var name = prompt('Введите имя пользователя: ', '').toLowerCase();var getName = (msg) => msg.children[1].children[0].children[0].children[0].textContent.trim().toLowerCase();function remove() {document.querySelectorAll('.im-mess-stack._im_mess_stack').forEach((msg) => { getName(msg) !== name && msg.remove();});}remove(); document.onkeydown = function keydown (evt) { if (evt.shiftKey && (evt.keyCode || evt.code) === 9) { remove(); } };
