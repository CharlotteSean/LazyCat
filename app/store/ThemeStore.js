import {observable, action, computed} from 'mobx';

export default  class ThemeStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable MainColor = '#409EFF';

    @observable PlaceholderTextColor = '#000000';
}
