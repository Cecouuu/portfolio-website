// const animatedSections = document.querySelectorAll("section, footer");
// const bubbleLayer = document.querySelector(".bubble-layer");
//
// animatedSections.forEach((section, index) => {
//     section.style.transitionDelay = `${index * 0.08}s`;
// });
//
// if ("IntersectionObserver" in window) {
//     const sectionObserver = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("show");
//             }
//         });
//     }, {
//         threshold: 0.15
//     });
//
//     animatedSections.forEach((section) => {
//         sectionObserver.observe(section);
//     });
// } else {
//     animatedSections.forEach((section) => {
//         section.classList.add("show");
//     });
// }
//
// function createBubble() {
//     if (!bubbleLayer) {
//         return;
//     }
//
//     const bubble = document.createElement("span");
//     const size = Math.floor(Math.random() * 45) + 24;
//     const angle = Math.random() * Math.PI * 2;
//     const distance = Math.floor(Math.random() * 120) + 150;
//     const moveX = Math.cos(angle) * distance;
//     const moveY = Math.sin(angle) * distance;
//     const speed = Math.floor(Math.random() * 4) + 7;
//
//     bubble.classList.add("orb-bubble");
//     bubble.style.setProperty("--bubble-size", `${size}px`);
//     bubble.style.setProperty("--move-x", `${moveX}px`);
//     bubble.style.setProperty("--move-y", `${moveY}px`);
//     bubble.style.setProperty("--bubble-speed", `${speed}s`);
//
//     bubbleLayer.appendChild(bubble);
//
//     setTimeout(() => {
//         bubble.remove();
//     }, speed * 1000);
// }
//
// createBubble();
// createBubble();
// createBubble();
// setInterval(createBubble, 550);
