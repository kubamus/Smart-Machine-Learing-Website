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

/**
 * @param speed speed of typing in milliseconds
 * @param onEnd optional callback function to be called when typing is done
 * @param fadeInTime time taken for each character to fade in. Only applicable in smooth mode
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

const randomNumberEffect = (
  finalNumber: number,
  elementId: string,
  duration: number,
  speed: number,
  width: number,
  onEnd?: () => void
) => {
  let i = 0;
  const element = document.getElementById(elementId);
  if (element) {
    element.style.width = width + "px";
    // Every 5ms, generate a random number and insert it in place of the element. As the last number generated, generate finalNumber. Effect should last for duration ms.
    const randomNumberEffectInterval = setInterval(() => {
      if (i < duration / speed) {
        element.innerHTML = Math.floor(Math.random() * finalNumber).toString();
        i++;
      } else {
        clearInterval(randomNumberEffectInterval);
        element.innerHTML = finalNumber.toString();
        if (typeof onEnd === "function") {
          onEnd();
        }
      }
    }, speed);
  }
};

export { typeWriter, randomNumberEffect };
