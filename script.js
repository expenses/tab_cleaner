document.getElementById("regex")
    .addEventListener("keydown", key => {
        if (key.which === 13) {
            cleanup_tabs();
        }
    });

function cleanup_tabs() {
    var regex = document.getElementById("regex").value;
    
    if (regex !== "") {
        var regex = new RegExp(regex);
        document.getElementById("regex").value = "";
        
        browser.tabs.query({}).then(tabs => {
            var ids = tabs
                .filter(tab => regex.test(tab.url))
                .map(tab => tab.id);
            browser.tabs.remove(ids);
        });
    }
}