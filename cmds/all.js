/**
 * Hint: Open All menu <search>
 * Order: 100
 */

(function () {
    const query = '$0';

    const findAndClick = (root) => {
        const e = root.querySelector('[aria-label="All"]');
        if (e) {
            e.click();
            setTimeout(() => {
                findAndType(document);
            }, 350);
            return true;
        }

        const nodes = root.querySelectorAll('*');
        for (const n of nodes) {
            if (n.shadowRoot) {
                if (findAndClick(n.shadowRoot)) return true;
            }
        }
        return false;
    };

    const findAndType = (root) => {
        const input = root.querySelector('input[placeholder="Filter"]');
        if (input) {
            input.focus();
            input.value = query;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            return true;
        }

        const nodes = root.querySelectorAll('*');
        for (const n of nodes) {
            if (n.shadowRoot) {
                if (findAndType(n.shadowRoot)) return true;
            }
        }
        return false;
    };

    if (!findAndClick(document))
        console.log('SNUtils: Navigation element not found.');
})();
