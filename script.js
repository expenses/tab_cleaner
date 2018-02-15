document.addEventListener("click", (e) => {
    if (e.target.id === "button") {
        var regex = document.getElementById("regex").value;
        var regex = new RegExp(regex);
        
        browser.tabs.query({}).then((tabs) => {
            var ids = tabs
                .filter(tab => regex.test(tab.url))
                .map(tab => tab.id);
            browser.tabs.remove(ids);
        });
    }
});