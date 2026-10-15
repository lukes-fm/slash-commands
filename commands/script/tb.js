// Open table in new tab <table name>
// NOTE: Minor improvement on  `tab [table name]_list`

(function () {
    const table = '$0';

    if (table) {
        window.open(
            `/now/nav/ui/classic/params/target/${table}_list.do`,
            '_blank'
        );
    } else {
        alert('tb: Missing table name from slash command');
    }
})();
