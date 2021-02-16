export default class ElementSetting {
  constructor(parent, children) {
    this.parent = parent.current;
    this.children = children.current;

    this.setParentRatio(this.parent);
    this.setChilrenRatio(this.children);
  }

  setParentRatio(parent) {
    const { clientWidth: width, clientHeight: height } = parent;
    this.parentRatio = width / height;
  }

  setChilrenRatio(children) {
    const { clientWidth: width, clientHeight: height } = children;
    this.childrenRatio = width / height;
  }

  setScale(parent) {
    if (this.parentRatio < this.childrenRatio) {
      const scale =
        (parent.current.clientWidth - 10) / this.children.clientWidth;
      this.children.style.transform = `scale(${scale < 1 ? scale : 1})`;
    } else {
      const scale =
        (parent.current.clientHeight - 10) / this.children.clientHeight;
      this.children.style.transform = `scale(${scale < 1 ? scale : 1})`;
    }
  }
}
