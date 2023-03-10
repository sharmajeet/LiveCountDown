const endDate = " 15 March 2023 12:01 AM ";
// const titleEl = "it is changed";
// document.getElementsById("title").innerHTML = titleEl;
document.getElementById("endDate").innerHTML = endDate;

const title = "Clock Created By Jeet Sharma"
document.getElementById("title").innerHTML = title;

const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    // document.writeln(Date());
    const diff = (end - now) / 1000; //miliseconds
    if (diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);//Days
    inputs[1].value = Math.floor((diff / 3600) % 24);//hours
    inputs[2].value = Math.floor((diff / 60) % 60);//minutes
    inputs[3].value = Math.floor(diff % 60);//seconds
}
// clock();
setInterval(
    () => {
        clock()
    },
    1000
)