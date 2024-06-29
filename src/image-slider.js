let slider = document.querySelector(".image-carousel-container");
let imageContainer = document.querySelector(".image-container");
let navigationCircles = document.querySelectorAll("ul li");
let forward = document.querySelector(".forward");
let backward = document.querySelector(".backward");

let canLoop = true;
let scrollDirection = 1;

export let startSlider = () => {
  setInterval(() => {
    if (canLoop) {
      let scrollLocation = slider.scrollLeft;
      if (
        scrollLocation >= imageContainer.scrollWidth * 3 - 20 ||
        scrollLocation === 0
      )
        scrollDirection *= -1;
      slider.scrollBy({
        behavior: "smooth",
        left: imageContainer.scrollWidth * scrollDirection,
      });
    } else canLoop = true;
  }, 5000);

  navigationCircles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      slider.scrollTo({
        behavior: "smooth",
        left: index * imageContainer.scrollWidth,
      });
      canLoop = false;
    });
  });
  forwardBackwardEvent(forward, 1);
  forwardBackwardEvent(backward, -1);
  slider.addEventListener("scroll", () => {
    slidePreventEvent();
  });
  slidePreventEvent();
};

let slidePreventEvent = () => {
  backward.style.pointerEvents = slider.scrollLeft === 0 ? "none" : "auto";
  forward.style.pointerEvents =
    slider.scrollLeft >= imageContainer.scrollWidth * 3 - 20 ? "none" : "auto";
};

let forwardBackwardEvent = (item, modifier) => {
  item.addEventListener("click", () => {
    slider.scrollBy({
      behavior: "smooth",
      left: imageContainer.scrollWidth * modifier,
    });
    canLoop = false;
  });
};
