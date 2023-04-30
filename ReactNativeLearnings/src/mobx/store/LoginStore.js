import {observable , action , computed} from 'mobx'
export class LoginStore {
    @observable userName = 'default name';
    @observable password = 'default password';

    @action setUserName(data){
        this.userName = data;
    }

    @action setPassword(data){
        this.password = data;
    }

    @computed get myUserName(){
        return this.userName;
    }
}