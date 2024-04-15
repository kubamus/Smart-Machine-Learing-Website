/*
! Add this to your css/scss file to use smooth mode

@keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
*/
const typeWriter = (
  text: string,
  elementId: string,
  speed: number,
  onEnd?: () => void,
  mode: "typing" | "smooth" = "typing",
  fadeInTime: string = "0.5s"
) => {
  let i = 0;
  const element = document.getElementById(elementId);
  if (element) {
    const typeWriterInterval = setInterval(() => {
      if (i < text.length) {
        if (mode === "typing") {
          element.innerHTML += text.charAt(i);
        } else if (mode === "smooth") {
          const span = document.createElement("span");
          const speedInSeconds = fadeInTime;
          span.style.animation = `fadein ${speedInSeconds}`;
          span.innerHTML = text.charAt(i);
          element.appendChild(span);
        }
        i++;
      } else {
        clearInterval(typeWriterInterval);
        if (typeof onEnd === "function") {
          onEnd();
        }
      }
    }, speed);
  }
};

export { typeWriter };
