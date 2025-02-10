function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

let showOk = function() {
    alert("You agreed.");
};

let showNo = function() {
    alert("You cancelled");
};

ask("Do you love me?", showOk, showNo);