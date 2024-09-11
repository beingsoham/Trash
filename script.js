let highestZ = 1;

class Paper {
  holdingpaper = false;

  prevMouseX = 0;
  prevMouseY = 0;

  mouseX = 0;
  mouseY = 0;

  velocityX = 0;
  velocityY = 0;

  currentPaperX = 0;
  currentPaperY = 0;

  init(paper) {
    paper.addEventListener("mousedown", (e) => {
      this.holdingpaper = true;
      paper.style.zIndex = highestZ;
      highestZ += 1;

      // Get initial mouse and paper position
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;

      this.currentPaperX = paper.offsetLeft;
      this.currentPaperY = paper.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
      if (this.holdingpaper) {
        // Calculate the new position of the paper
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        let deltaX = this.mouseX - this.prevMouseX;
        let deltaY = this.mouseY - this.prevMouseY;

        paper.style.left = this.currentPaperX + deltaX + "px";
        paper.style.top = this.currentPaperY + deltaY + "px";
      }
    });

    paper.addEventListener("mouseup", () => {
      this.holdingpaper = false;
    });

    window.addEventListener("mouseup", () => {
      this.holdingpaper = false;
      console.log("mouse button is released");
    });
  }
}

const papers = Array.from(document.querySelectorAll(".paper"));

papers.forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});
