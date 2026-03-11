document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }

    const header = document.querySelector("[data-site-header]");
    const menuButton = document.querySelector("[data-menu-button]");
    const menu = document.querySelector("[data-mobile-menu]");
    const menuOpenIcon = document.querySelector("[data-menu-open]");
    const menuCloseIcon = document.querySelector("[data-menu-close]");
    const yearNode = document.querySelector("[data-year]");
    const reveals = document.querySelectorAll(".reveal");

    const syncHeader = () => {
        if (!header) {
            return;
        }
        header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    const setMenuState = (expanded) => {
        if (!menuButton || !menu) {
            return;
        }
        menuButton.setAttribute("aria-expanded", String(expanded));
        menu.classList.toggle("hidden", !expanded);
        if (menuOpenIcon && menuCloseIcon) {
            menuOpenIcon.classList.toggle("hidden", expanded);
            menuCloseIcon.classList.toggle("hidden", !expanded);
        }
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
            const expanded = menuButton.getAttribute("aria-expanded") === "true";
            setMenuState(!expanded);
        });

        menu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => setMenuState(false));
        });
    }

    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    if (reveals.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        reveals.forEach((item) => observer.observe(item));
    }
});
