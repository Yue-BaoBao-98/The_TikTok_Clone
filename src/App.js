import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import routes
import { publicRoutes, privateRoutes } from '~/routes';

//import Layout
import { DefaultLayout, HeaderOnly } from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((publicRoute, index) => {
                        let Layout = DefaultLayout;
                        if (publicRoute.layout === null) {
                            Layout = Fragment;
                        } else if (publicRoute.layout) {
                            Layout = publicRoute.layout;
                        }

                        return (
                            <Route
                                key={index}
                                path={publicRoute.path}
                                element={
                                    <Layout>
                                        <publicRoute.component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
