/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from 'components/common/NotFound';
import Forbidden from 'components/common/Forbidden';
import Welcome from 'features/welcome/Welcome';
import { useEmail } from 'hooks/useEmail';
import ConferenceListContainer from 'features/conference/components/ConferenceListContainer';
import MyConferenceListContainer from 'features/MyConferences/list/components/MyConferenceListContainer';
import MyConferenceContainer from 'features/MyConferences/edit/components/MyConferenceContainer';

export default function AppRoutes() {
    const [email] = useEmail()
    if (!email) {
        return (
            <Switch>
                <Route exact path="/welcome" component={Welcome}/>
                <Redirect to="/welcome" />
            </Switch>)
    }
    return (
        <Switch>
            <Route exact path="/welcome" component={Welcome}/>
            <Route exact path="/conferences" component={ConferenceListContainer} />
            <Route exact path="/myConferences" component={MyConferenceListContainer} />
            <Route exact path="/myConferences/:id(new)" component={MyConferenceContainer} />
            <Route exact path="/myConferences/:id(\d+)" component={MyConferenceContainer} />
            <Redirect exact from="/" to="/welcome" />
            <Route exact path="/forbidden" component={Forbidden} />
            <Route render={() => <NotFound title="PageNotFound"></NotFound>} />
        </Switch>
    )
}