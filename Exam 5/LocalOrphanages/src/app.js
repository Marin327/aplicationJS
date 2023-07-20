import page from '../node_modules/page/page.mjs';
import {logout} from "./api/users.js";
import {updateNav} from "./middlewares/navbar.js";
import {preload} from "./middlewares/preload.js";
import {parseQueryString} from "./middlewares/query_string.js";
import {decorateContext} from "./middlewares/render.js";
import {addSession} from "./middlewares/session.js";
import {create} from "./repos/dataRepo.js";
import {createView} from "./views/create.js";
import {detailsView} from "./views/details.js";
import {editView} from "./views/edit.js";
import {homeView} from "./views/home.js";
import {loginView} from "./views/login.js";
import {postsView} from "./views/posts.js";
import {registerView} from "./views/register.js";

page(addSession);
page(updateNav);
page(decorateContext);
page(parseQueryString);
page('/', homeView);
page('/posts', postsView);
page('/details/:id', preload, detailsView);
page('/edit/:id', preload, editView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);

page.start();

document.getElementById('logout')
    .addEventListener('click', onLogout);

function onLogout() {
    logout();
    page.redirect('/');
}
