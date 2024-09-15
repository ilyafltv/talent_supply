const ROOT_MENU = document.getElementById('menu');

class Menu {
    render() {
        const html = `
            <!-- Navbar -->
            <div class="menu">

                <div class="container">
                    <nav>
                        <a href="index.html" class="menu-item__logo"><img src="images/logo.svg" alt="TalentSupply"></a>

                        <ul class="menu-item__links">
                            <li><a href="index.html">Home</a><li>
                            <li><a href="about.html">About Us</a><li>
                            <li><a href="policy.html">Policy</a><li>
                            <li><a href="contacts.html">Contacts</a><li>
                        </ul>
                        
                        <div class="menu-item__buttons">
                            <button class="btn__menu-main" onclick="popup.renderPopupLogin()">Log In</button>
                            <button class="btn__menu-second id="registration" onclick="popup.renderPopupRegistration()">Register</button>
                        </div>

                        <div class="btn-burger">
                            <span class="btn-burger__first-line"></span>
                            <span class="btn-burger__second-line"></span>
                            <span class="btn-burger__third-line"></span>
                        </div>

                    </nav>
                </div>
                
            </div>

            <!-- Burger-menu -->
            <nav class="menu-mobile">
                <div class="container">
                    <ul class="menu-mobile__links">
                        <li><a href="index.html">Home</a><li>
                        <li><a href="about.html">About Us</a><li>
                        <li><a href="policy.html">Policy</a><li>
                        <li><a href="contacts.html">Contacts</a><li>
                    </ul>
        
                    <div class="menu-mobile__buttons">
                        <button class="btn__menu-main" onclick="popup.renderPopupLogin()">Log In</button>
                        <button class="btn__menu-second" onclick="popup.renderPopupRegistration()">Register</button>
                    </div>
        
                    <div class="menu-mobile__social-media">
                        <a href="#"><img src="images/instagram.svg" alt="instagram"></a>
                        <a href="#"><img src="images/facebook.svg" alt="facebook"></a>
                        <a href="#"><img src="images/x.svg" alt="twitter"></a>
                    </div>
                </div>
            </nav>
        `;
        ROOT_MENU.innerHTML = html;
    }
}
const menu_component = new Menu();

menu_component.render();