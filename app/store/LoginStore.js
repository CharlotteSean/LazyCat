import {observable,action} from 'mobx'

class LoginStore {
    @observable userName = '';
    @observable passWord = '';

    @action
    setUserName(text){
        this.userName = 'helloqq ' + text;
    }

}

export default new LoginStore()
