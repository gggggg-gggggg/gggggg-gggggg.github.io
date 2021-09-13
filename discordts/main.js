(() => {
    let timestamp = date => {
        return Math.floor(date.valueOf() / 1000);
    };

    let update = date => {
        document.getElementById("day").value = date.getDate();
        document.getElementById("month").value = date.getMonth();
        document.getElementById("year").value = date.getFullYear();
        document.getElementById("hour").value = date.getHours();
        document.getElementById("minute").value = date.getMinutes();
        document.getElementById("second").value = date.getSeconds();
        let ts = timestamp(date);
        let style = document.getElementById("type").value;
        document.getElementById("output").innerText = `<t:${ts}:${style}>`;
    };

    document.addEventListener("DOMContentLoaded", e => {
        update(new Date());
    });

    document.addEventListener("change", e => {
        if (!e.target.matches("select, .number")) {
            return;
        }
        let date = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("day").value, document.getElementById("hour").value, document.getElementById("minute").value, document.getElementById("second").value);
        update(date);
    });
})();