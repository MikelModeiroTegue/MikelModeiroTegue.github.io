const myClock= document.querySelector('.clock')

const time = () => {
    const now = new Date();

    const hr = now.getHours();
    const mins = now.getMinutes();
    const sec = now.getSeconds();
    const Day = now.toDateString();

    const html = `
        <span>${hr}</span>:
        <span>${mins}</span>:
        <span>${sec}</span>
        <span class="day">${Day}</span>
        <span class="day">By Tariq St Patrick</span>
    `;
    myClock.innerHTML = html ;
}
setInterval(time, 1000)