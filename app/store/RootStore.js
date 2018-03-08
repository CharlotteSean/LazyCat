import {observable, action, computed} from 'mobx';
import Api from '../api';

import UserStore from './UserStore';
import ThemeStore from './ThemeStore';
import LoginStore from './LoginStore';

class RootStore {

    /*用户*/
    userStore: UserStore;

    /*主题*/
    themeStore: ThemeStore;

    /*登录*/
    loginStore: LoginStore;

    @observable rootUrl = 'https://www.easy-mock.com/mock/5a1b898afc9bad5c3ee51403/lazycat/';
    @observable isLogin = false;

    constructor() {
        this.userStore =  new UserStore(this);
        this.themeStore =  new ThemeStore(this);
        this.loginStore =  new LoginStore(this);
    }

    apiUrl (apiKey) {
        return this.rootUrl + Api[apiKey];
    }
}

export default new RootStore;
