import {observable,action} from 'mobx'

export default class LoginStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

}
