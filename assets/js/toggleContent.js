function showContent(button) {
  const selector = button.getAttribute("data-target");
  const skillInvisible = document.querySelector(`${selector}.invisible`);
  if (skillInvisible) {
    skillInvisible.classList.remove("invisible");
  } else {
    const skillVisible = document.querySelector(`${selector}`);
    skillVisible.classList.add("invisible");
  }
}
