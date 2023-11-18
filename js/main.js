let link = document.querySelector(".see");

link.onmouseenter = () => {
  link.children[0].children[1].children[0].children[1].setAttribute("fill", '#fff');
};
link.onmouseout = () => {
  link.children[0].children[1].children[0].children[1].setAttribute("fill", '#62E0D9');
}