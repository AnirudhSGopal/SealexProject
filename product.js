document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    const popup = document.createElement("div");
    popup.classList.add("popup");

    // Close button + structure
    popup.innerHTML = `
        <span class="popup-close">&times;</span>
        <div class="popup-content">
            <img src="" alt="Product Image">
            <div class="popup-details">
                <h3></h3>
                <p class="popup-desc"></p>
                <p class="popup-code"></p>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
    
    const popupImg = popup.querySelector("img");
    const popupTitle = popup.querySelector("h3");
    const popupDesc = popup.querySelector(".popup-desc");
    const popupCode = popup.querySelector(".popup-code");
    const popupClose = popup.querySelector(".popup-close");

    boxes.forEach(box => {
        box.addEventListener("click", function () {
            const imgSrc = this.querySelector("Img").src;
            const title = this.querySelector("h3").textContent;
            const code = this.querySelector(".code-color").textContent;
            const description = "This is a sample description for " + title; // Add real descriptions later

            popupImg.src = imgSrc;
            popupTitle.textContent = title;
            popupDesc.textContent = description;
            popupCode.textContent = code;

            popup.style.display = "block";
        });
    });

    popupClose.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
