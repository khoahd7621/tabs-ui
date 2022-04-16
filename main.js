const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

let i = 0, lengthTabs = tabs.length;

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
        i = index;

        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});

setInterval(() => {
    if (i === lengthTabs - 1) {
        i = i - lengthTabs;
    }

    i++;
    
    $(".tab-pane.active").classList.remove("active");
    $(".tab-item.active").classList.remove("active");

    tabs[i].classList.add("active");
    panes[i].classList.add("active");

    line.style.left = tabs[i].offsetLeft + "px";
    line.style.width = tabs[i].offsetWidth + "px";
}, 2000);
