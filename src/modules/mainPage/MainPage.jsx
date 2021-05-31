import React from 'react';
import TableModule from '../tableModule/TableModule.jsx';
import { Wrapper } from './styledComponents';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginModule from '../loginPage/LogInPage.jsx';
import Modals from '../modals';
import {useSelector} from "react-redux";
import { getUserStatus } from './selectors';


const MainPage = () => {
    const isLogged = useSelector(getUserStatus);

    return(
    <Router>
        <Switch>
            <Wrapper>
                <Route exact path="/" component={TableModule}/>
                <Route path="/login">
                    {isLogged ? <Redirect to="/" /> : <LoginModule />}
                </Route>
                <Modals/>
            </Wrapper>
        </Switch>
    </Router>
    )
};

export default React.memo(MainPage);