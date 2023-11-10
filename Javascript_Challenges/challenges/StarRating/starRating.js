class starRating {
  constructor(starContainerId) {
    this.container = starContainerId;
    this.stars = document.querySelectorAll(".star");
    this.filled = 0;
    this.bindEvents();
  }

  bindEvents() {
    this.container.addEventListener("click", (event) => {
      this.onStarClick(event);
    });

    this.container.addEventListener("mouseover", (event) => {
      this.onStarMouseOver(event);
    });
    this.container.addEventListener("mouseleave", (event) => {
      this.onRestoreRating();
    });
  }

  onStarClick(event) {
    const targetElement = event.target.classList[0];
    if (targetElement != "star") {
      return;
    }
    const currentElemClicked = event.target.dataset.index;
    this.filled = currentElemClicked;
    this.fillStars(currentElemClicked);
    this.updateRatings(currentElemClicked);
  }

  fillStars(count) {
    for (let i = 0; i < 5; i++) {
      this.stars[i].classList.remove("star-filled");
    }

    for (let i = 0; i < count; i++) {
      this.stars[i].classList.add("star-filled");
    }
  }

  updateRatings(count) {
    document.getElementById("count").innerHTML = ` Rating count:${count}`;
  }

  onStarMouseOver(event) {
    const currentElem = event.target.dataset.index;
    this.fillStars(currentElem);
  }

  onRestoreRating() {
    this.fillStars(this.filled);
  }
}

const starContainerId = document.getElementById("star-container");
new starRating(starContainerId);
