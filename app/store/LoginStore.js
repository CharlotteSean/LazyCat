import {observable,action} from 'mobx'

export default class LoginStore {
    @observable userName = '';
    @observable passWord = '';

    @action
    setUserName(text){
        this.userName = 'helloqq ' + text;
    }

}
