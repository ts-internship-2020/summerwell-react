import 'url-search-params-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { theme } from 'utils/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'utils/i18n';
import './assets/css/index.css';
import "moment/locale/ro";
import { AreasWrapper } from './providers/AreasProvider';

import AuthApolloProvider from 'apollo/AuthApolloProvider';
import AuthProvider from 'providers/AuthenticationProvider'; 

ReactDOM.render(
    <AreasWrapper>
        <AuthProvider>
            <AuthApolloProvider>
                <MuiThemeProvider theme={theme}>
                    <BrowserRouter>
                        {routes}
                    </BrowserRouter>
                </MuiThemeProvider>
            </AuthApolloProvider>
        </AuthProvider>
    </AreasWrapper>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
