import { TimelineMax as Timeline, Power1 } from 'gsap';

const getStarshipTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.StarShipDetail');
  const contentInner = node.querySelector('.StarShipDetail-info');

  timeline
    .from(node, 0.15, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(content, 0, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    .from(contentInner, { autoAlpha: 0, y: 25, delay: 0.05, ease: Power1.easeIn });

  return timeline;
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const buttons = node.querySelectorAll('.StarShipList-button');

  timeline
    .from(node, 0.15, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .staggerFrom(buttons, 0.25, { autoAlpha: 0, y: 25, delay: 0.05, ease: Power1.easeIn }, 0.05);

  return timeline;
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
  else
    timeline = getStarshipTimeline(node, delay);

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 1, { display: 'none', autoAlpha: 1, ease: Power1.easeOut });
  timeline.play();
}
