function includeFooter() {
    const footer = `
        <footer class="footer py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="index.html" class="nav-link px-2 text-body-secondary">דף הבית</a></li>
                <li class="nav-item"><span class="nav-link px-2 text-body-secondary">|</span></li>
                <li class="nav-item"><a href="about.html" class="nav-link px-2 text-body-secondary">אודות</a></li>
                <li class="nav-item"><span class="nav-link px-2 text-body-secondary">|</span></li>
                <li class="nav-item"><a href="contact.html" class="nav-link px-2 text-body-secondary">יצירת קשר</a></li>
                <li class="nav-item"><span class="nav-link px-2 text-body-secondary">|</span></li>
                <li class="nav-item"><a href="support.html" class="nav-link px-2 text-body-secondary">תמיכה</a></li>
                <li class="nav-item"><span class="nav-link px-2 text-body-secondary">|</span></li>
                <li class="nav-item"><a href="privacy.html" class="nav-link px-2 text-body-secondary">מדיניות פרטיות</a></li>
            </ul>
            <p class="text-center text-body-secondary">© 2024 שיעורי הרב זושא וואלף</p>
        </footer>
    `;
    document.getElementById('footer-container').innerHTML = footer;
} 