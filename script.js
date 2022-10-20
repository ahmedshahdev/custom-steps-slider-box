let container = document.querySelector(".container");
let container_child = container.querySelectorAll(".box");

let screen_box_display_limit = 4;

var container_width = container.getBoundingClientRect()["width"];
container.style.height = container_width/screen_box_display_limit+"px";

let steps_move = container_width / 4 * 3;
// let steps_move = container_width / 4; step 1
// let steps_move = container_width / 4 * 3; step 3

var container_child_width = window.getComputedStyle(container_child[0])["width"];
container_child_width = parseFloat(container_child_width.replace("px", "")) * screen_box_display_limit

document.body.onresize = function() {
    container_width = container.getBoundingClientRect()["width"];
    container.style.height = container_width/screen_box_display_limit+"px";
}

const __scroll = (position) => {
    if (position == "positive") {
        container.scrollLeft += steps_move;
    } else {
        container.scrollLeft -= steps_move;
    }
}