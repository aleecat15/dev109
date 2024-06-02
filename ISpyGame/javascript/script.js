document.addEventListener("DOMContentLoaded", () => {
    const items = ["mickey", "donald", "goofy"]; // Add more items as needed
    let foundItems = 0;

    items.forEach(item => {
        const area = document.getElementById(item + "Area");
        area.addEventListener("click", () => {
            foundItem(item);
        }, false);
    });

    function foundItem(item) {
        const listItem = document.getElementById(item);
        listItem.style.textDecoration = "line-through";
        foundItems++;
        if (foundItems === items.length) {
            setTimeout(() => {
                if (confirm("You found all the items! Do you want to play again?")) {
                    replay();
                }
            }, 100);
        }
    }

    function replay() {
        location.reload();
    }
});

