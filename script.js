document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("share-button");
    const popup = document.getElementById("popup");

    button.addEventListener("click", function(event) {
        event.stopPropagation();
        togglePopup();
    });

    function togglePopup() {
        button.classList.toggle("active");
        if (popup.style.display == "flex")
            popup.style.display = "none";
        else popup.style.display = "flex";
    }

    popup.addEventListener("click", function(event) {
        event.stopPropagation();
    })

    document.addEventListener("click", () =>{
        if(popup.style.display == "flex"){
            popup.style.display = "none";
            button.classList.remove("active");
        }
    });
})
