let ROOT_POPUP = document.getElementById('popup');

class Popup {

    close() {
        ROOT_POPUP.classList.add('popup-closed');
        const html = '';
        ROOT_POPUP.innerHTML = html;
    }

    renderPopupLogin() {
        popup.close();

        ROOT_POPUP.classList.remove('popup-closed');
        const html = `
            <div class="popup-container">
                <div class="popup-bg" onclick="popup.close()"></div>
                <div class="popup-block">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross-popup.svg" alt="cross"/>
                    <h2>Log In</h2>
                    <p class="popup-block__p-title">And find the best employee</p>
                    <form id="form-login" onsubmit="popup.close()">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Email address"/>

                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>

                        <input class="btn-main" type="submit" value="Log In"/>
                    </form>
                    <p>Don't have an account?<br><a onclick="popup.renderPopupRegistration()">Sign up</a></p>
                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }

    renderPopupRegistration() {
        popup.close();


        ROOT_POPUP.classList.remove('popup-closed');
        const html = `
            <div class="popup-container"> 
                <div class="popup-bg" onclick="popup.close()"></div>
                <div class="popup-block">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross-popup.svg" alt="cross"/>
                    <h2><span>Get</span> Started</h2>
                    <p class="popup-block__p-title">Create an account </p>

                    <form id="form-registration">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Email address"/>

                        <label for="name" >Full Name</label>
                        <input type="text" for="name" placeholder="Your name"/>

                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>

                        <input class="btn-main btn-margin-popup" type="submit" value="Register" onclick="popup.renderPopupRegistration2()" />
                    </form>

                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }

    renderPopupRegistration2() {
        popup.close();

        ROOT_POPUP.classList.remove('popup-closed');
        const html = `
            <div class="popup-container">
                <div class="popup-bg" onclick="popup.close()"></div>
                <div class="popup-block">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross-popup.svg" alt="cross"/>
                    <h2><span>Get</span> Started</h2>
                    <p class="popup-block__p-title">Create an account </p>
                    <form>
                        <label for="phone">Phone number</label>
                        <input name="phone" type="text" placeholder="(777) 777-7777"/>

                        <input class="btn-main btn-margin-popup" type="submit" value="Send Code" onclick="popup.renderPopupRegistration3()" />
                    </form>
                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }

    renderPopupRegistration3() {
        popup.close();

        ROOT_POPUP.classList.remove('popup-closed');
        const html = `
            <div class="popup-container">
                <div class="popup-bg" onclick="popup.close()"></div>
                <div class="popup-block">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross-popup.svg" alt="cross"/>
                    <h2><span>Get</span> Started</h2>
                    <p class="popup-block__p-title">Create an account </p>
                    <form>
                        <label for="phone">Phone number</label>
                        <input name="phone" type="text" placeholder="(777) 777-7777" disabled/>

                        <label for="code">Input code here:</label>
                        <input name="code" type="text"/>

                        <input class="btn-main btn-margin-popup" type="submit" value="Send Code"/>
                    </form>
                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }

    renderPopupHistory() {
        popup.close();

        const html = `
            <div class="popup-container">
                <div class="popup-bg" onclick="popup.close()"></div>
                <div class="popup-block">
                    <img onclick="popup.close()" class="btn-cross-popup" src="images/cross-popup.svg" alt="cross"/>
                    <h2>Order History</h2>
                    <p class="popup-block__p-title">You have no completed orders yet!</p>

                    <input class="btn-main btn-margin-popup" type="submit" value="Close" onclick="popup.close()"/>
                </div>
            </div>
        `;

        ROOT_POPUP.innerHTML = html;
    }
}
const popup = new Popup();