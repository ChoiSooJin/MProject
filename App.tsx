import React from 'react';
import {Provider} from 'mobx-react';
import AppContainer from './src/navigator';
import MapStore from './src/stores/mapStore';

export default class App extends React.Component {
  private mapStore = new MapStore();

  public render() {
    return (
      <Provider store={this.mapStore}>
        <AppContainer />
      </Provider>
    );
  }
}
