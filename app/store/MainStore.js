import {observable,action} from 'mobx'

export const LOGIN_COUNT = 10;

class MainStore {
    @observable users = [];
    @observable userName = "好吧";

    @action
    addUser(user){
        console.log(user)
        this.users.push(user)
    }

}

export default new MainStore()
