import React from 'react';
import Layout from './hoc/layout/layout'
import { Route, Switch } from 'react-router-dom';
import ChartRenderer from "./containers/ChartRenderer/ChartRenderer";
import DetailedView from "./containers/DetailedView/DetailedView";

function App() {
  return (
    <div>
        <Layout>
            <Switch>
                <Route path="/detailed" component={DetailedView} />
                <Route path="/" exact component={ChartRenderer} />
            </Switch>
        </Layout>
    </div>
  );
}


export default App;
