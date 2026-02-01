const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    const plus = header.querySelector(".plus-icon");
    const minus = header.querySelector(".minus-icon");
    const content = header.nextElementSibling;

    header.addEventListener("click", () => {
        const isOpen = content.classList.contains("open");

        if (!isOpen) {
        content.style.height = content.scrollHeight + "px";
        content.classList.add("open");
        plus.classList.add("hidden");
        minus.classList.remove("hidden");
        content.classList.add("mb-4");
        } else {
        content.style.height = "0px";
        content.classList.remove("open");
        plus.classList.remove("hidden");
        minus.classList.add("hidden");
        content.classList.remove("mb-4");
        }
    });
});
