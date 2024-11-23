export default function spin(
  el: HTMLElement,
  { duration = 2000, spin = 2 }: { duration?: number; spin?: number }
) {
  el.style.transition = `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
  el.style.transform = `rotate(${spin * 360}deg)`;
  el.style.opacity = "0";

  setTimeout(() => {
    el.style.opacity = "1";
    el.style.transform = `rotate(0deg)`;
  }, 100);
}
