import { animate } from "./helper";

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    const popupContent = document.querySelector(".popup-content");

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    popupContent.style.opacity = progress;
                    popupContent.style.top = 20 * progress + "%";
                },
            });
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
    modal.addEventListener('click', (e) => {
        if (
            !e.target.closest(".popup-content") ||
            e.target.classList.contains("popup-close")
        ) {
            modal.style.display = "none";
        }
    })
};

export default modal