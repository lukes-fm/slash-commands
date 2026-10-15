// Open Quick Links <new tab>

(function () {
    const isNewTab = '$0' === 'tab' || '$0' === 't';

    if (isNewTab) {
        window.open(
            '/now/nav/ui/classic/params/target/sn_ex_sp_quick_link_list.do',
            '_blank'
        );
    } else {
        window.location.href =
            'now/nav/ui/classic/params/target/sn_ex_sp_quick_link_list.do';
    }
})();
