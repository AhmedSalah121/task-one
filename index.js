const allPagesCheckbox = document.querySelector('.all-pages .checkbox');

const pageCheckboxes = document.querySelectorAll('.page-item .checkbox');

// 1. When "All Pages" checkbox changes
allPagesCheckbox.addEventListener('change', function() {
    pageCheckboxes.forEach(checkbox => {
        checkbox.checked = allPagesCheckbox.checked;
    });
});

// 2. Update "All Pages" checkbox if all individual pages are checked/unchecked
pageCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Check if all page checkboxes are checked
        const allChecked = Array.from(pageCheckboxes).every(cb => cb.checked);
        
        // Check if no page checkboxes are checked
        const noneChecked = Array.from(pageCheckboxes).every(cb => !cb.checked);
        
        // Update "All Pages" checkbox accordingly
        if (allChecked) {
            allPagesCheckbox.checked = true;
        } else if (noneChecked) {
            allPagesCheckbox.checked = false;
        }
    });
});
