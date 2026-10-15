// Open Knowledge Center <new tab>

(function () {
    const isNewTab = '$0' === 'tab' || '$0' === 't';

    if (isNewTab) {
        window.open('/now/knowledge-center/knowledge-hub', '_blank');
    } else {
        window.location.href = '/now/knowledge-center/knowledge-hub';
    }
})();
