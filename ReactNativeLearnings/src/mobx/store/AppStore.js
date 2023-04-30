import {observable , action} from 'mobx'
export class AppStore {
    @observable appName = 'Mobx Learning';
    

    @action setApprName(data){
        this.appName = data;
    }

}