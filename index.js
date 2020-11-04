/*
javascript: var name = prompt("Введите имя человека для фильтра");
var getName = (msg) =>
  msg.children[1].children[0].children[0].children[0].textContent;
function remove() {
  i = 0;
  document.querySelectorAll(".im-mess-stack._im_mess_stack").forEach((msg) => {
    i++;
    if (getName(msg) === name) {
      console.log("left " + i + " message");
    } else {
      console.log("removed " + i + " message");
      msg.remove();
    }
  });
}
remove();
setInterval(() => {
  remove();
  console.log("timer");
}, 1000);
*/

// one liner, put it in a bookmark
javascript: var name = prompt('Введите имя человека для фильтра: '); var getName = (msg) => msg.children[1].children[0].children[0].children[0].textContent; function remove() {i = 0;document.querySelectorAll('.im-mess-stack._im_mess_stack').forEach((msg) => {  i++;  if (getName(msg) === name) {    console.log('left ' + i + ' message');  } else {    console.log('removed ' + i + ' message');    msg.remove()  }});}remove();setInterval(() => {remove(); console.log('timer');}, 1000);
