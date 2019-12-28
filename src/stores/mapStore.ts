import {observable, action} from 'mobx';

export default class MapStore {
  @observable
  public addMarkerBtnState: boolean;
  constructor() {
    this.addMarkerBtnState = false;
  }

  @action
  public setAddMarkerBtnState() {
    this.addMarkerBtnState = !this.addMarkerBtnState;
  }
}
