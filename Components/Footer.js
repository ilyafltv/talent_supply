const ROOT_FOOTER = document.getElementById('footer');

class Footer {
    render() {
        const html = `
            <div class="container">
                <a href="index.html" class="footer-item__logo"><img src="images/logo2.svg" alt="TalentSupply"></a>
                <ul class="footer-item__links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="policy.html">Policy</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                </ul>
                <img class="footer-item__arrow" src="images/arrow-footer.png" alt="Up">

                <div class="footer-item__info">
                    <div class="footer-item__info__contacts">
                        <a href="#">777-777-77-77</a>
                        <p> LLC2327 Washington St Apt 3c<br>Hollywood<br>FL<br>33020</p>
                    </div>
                    <div class="footer-item__info__contacts__second">
                        <div class="footer__social-media">
                            <a href="#"><img src="images/instagram_footer.svg" alt="instagram"></a>
                            <a href="#"><img src="images/facebook_footer.svg" alt="facebook"></a>
                            <a href="#"><img src="images/x_footer.svg" alt="twitter"></a>
                        </div>
                        <p>2024 © Talent Supply. All rights reserved.</p>
                    </div>
                </div>
            </div>
        `;
        ROOT_FOOTER.innerHTML = html;
    }
}
const footer_component = new Footer();

footer_component.render();