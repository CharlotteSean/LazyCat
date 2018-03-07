import {observable, action, computed} from 'mobx';
class UserStore {

    // 用户信息
    @observable userInfo = {
        userName:'',
        nickName:'李留白',
        avatar:'',
    }
}

export default UserStore;
