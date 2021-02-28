class SlideMenu {
  constructor(button, aside) {
    this.$button = button.current;
    this.$aside = aside.current;
    this.handlingEvent();
  }

  handlingEvent = () => {
    this.openMenu();
    this.closeMenu();
  };

  openMenu = () => {
    this.event = () => {
      this.$aside.classList.add("on");
    };
    this.$button.addEventListener("click", this.event);
  };

  closeMenu = () => {
    this.closeEvent = (e) => {
      if (e.target === e.currentTarget) {
        this.$aside.classList.remove("on");
      }
    };
    this.$aside.addEventListener("click", this.closeEvent);
  };

  removeEvent = () => {
    this.$button.removeEventListener("click", this.event);
    this.$aside.addEventListener("click", this.closeEvent);
  };
}

export default SlideMenu;
