/**
 * Hint: Open My Company Applications
 * Order: 100
 */

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
