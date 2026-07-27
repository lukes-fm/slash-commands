/**
 * Hint Open Page Route Maps <new tab>
 */

(function () {
    const isNewTab = '$0' === 'tab' || '$0' === 't';

    if (isNewTab) {
        window.open(
            '/now/nav/ui/classic/params/target/sp_page_route_map_list.do',
            '_blank'
        );
    } else {
        window.location.href =
            '/now/nav/ui/classic/params/target/sp_page_route_map_list.do';
    }
})();
