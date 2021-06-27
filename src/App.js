import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import RouterList from './router'
import store from './store'
import { Provider} from 'react-redux'
import './app.css'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<Fragment>
            <Provider store={store}>
                <Switch>
                    {RouterList.map((item, index) => <Route exact path={item.path} component={item.component} key={index}></Route>)}
                </Switch>
                </Provider>
        </Fragment>)
    }
}
export default App
