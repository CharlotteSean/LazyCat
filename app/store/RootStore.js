import {observable, action, computed} from 'mobx'
import Api from '../api'

class RootStore {
    @observable MainColor = '#409EFF';

    @observable rootUrl = 'https://www.easy-mock.com/mock/5a1b898afc9bad5c3ee51403/lazycat/';
    @observable isLogin = false;

    apiUrl (apiKey) {
        return this.rootUrl + Api[apiKey];
    }


}

export default new RootStore()
