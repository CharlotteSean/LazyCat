import {observable,action} from 'mobx'

export const LOGIN_COUNT = 10;

class MainStore {
    @observable root = 'https://www.easy-mock.com/mock/5a1b898afc9bad5c3ee51403/lazycat/';
    @observable message = ''

    @action
    addUser(num){
        this.message = 'hello ' + num;
    }

}

export default new MainStore()
