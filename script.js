document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.chapter-view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-view');

            // Switch active nav item
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Switch views
            views.forEach(view => {
                if (view.id === `view-${target}`) {
                    view.classList.add('active');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    view.classList.remove('active');
                }
            });
        });
    });

    console.log("%c Reasoning Master Hub Initialized 🟢", "color: #059669; font-size: 16px; font-weight: bold;");
});
