// Open My Company Applications <new tab>

(function () {
    const isNewTab = '$0' === 'tab' || '$0' === 't';

    if (isNewTab) {
        window.open(
            '/now/nav/ui/classic/params/target/%24mycompanyappsmgmt.do',
            '_blank'
        );
    } else {
        window.location.href =
            '/now/nav/ui/classic/params/target/%24mycompanyappsmgmt.do';
    }
})();
