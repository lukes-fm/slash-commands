// Open Knowledge Center <new tab>

(function () {
    const query = '$0';
    const table = '$table';

    if (isNewTab) {
        window.open('/now/knowledge-center/knowledge-hub', '_blank');
    } else {
        window.location.href = '/now/knowledge-center/knowledge-hub';
    }
})();
