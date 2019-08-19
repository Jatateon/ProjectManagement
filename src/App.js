import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Topbar from './components/Topbar/Topbar';
import Projects from './screens/Projects/Projects';
import Home from './screens/Home/Home';


export default withRouter(
    class App extends React.PureComponent {
        render() {
            return (
                <div>{logo}
                    <Topbar />
                    <Switch>
                        <RouteWithTitle title={'Home'} exact path="/" component={Home} />
                        <RouteWithTitle title={'Projects'} path="/project" component={Projects} />
                        <Redirect to={'/Home'} />
                    </Switch>
                </div>
            );
        }
    }
);

export const RouteWithTitle = ({ title, render, component: Comp, ...props }) => (
    <Route {...props} render={(p) => <DocumentTitle title={title}>{render ? render(p) : <Comp {...p} />}</DocumentTitle>} />
);
