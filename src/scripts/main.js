document.addEventListener("DOMContentLoaded", function () {
  const btn_character = document.querySelectorAll("[data-character-active]");
  const header = document.querySelector("header");
  const hero = document.querySelector(".hero");
  const heroheight = hero.clientHeight - 100;

  window.addEventListener("scroll", () => {
    const currentPosition = window.scrollY;

    if (currentPosition < heroheight) {
      hideHeader();
    } else {
      showHeader();
    }
  });

  btn_character.forEach(function (btn) {
    btn.addEventListener("click", (button) => {
      const tabdata = button.target.dataset.characterActive;
      const introducao = document.querySelector(`[data-character=${tabdata}]`);
      hideTabs();
      // console.log(tabdata);
      hideCharacter();
      introducao.classList.add("characters__introduction--is-active");

      button.target.classList.add("characters__tabs_button--is-active");
    });
  });

  function hideTabs() {
    const tabsContainer = document.querySelectorAll("[data-character-active]");
    tabsContainer.forEach((tabs) => {
      tabs.classList.remove("characters__tabs_button--is-active");
    });
  }

  function hideCharacter() {
    const character = document.querySelectorAll("[data-character]");
    character.forEach((char) => {
      char.classList.remove("characters__introduction--is-active");
    });
  }

  function hideHeader() {
    header.classList.add("header--is-hidden");
  }

  function showHeader() {
    header.classList.remove("header--is-hidden");
  }
});
