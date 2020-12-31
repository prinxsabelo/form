import { Route, useRouteMatch } from "react-router-dom";
import Build from "../../pages/Build";
import Results from "../../pages/Results";
import Settings from "../../pages/Settings";
import Share from "../../pages/Share";


const TabContent = (props) => {
    const { url } = useRouteMatch();

    return (

        <div className="tab-content">
            <div className="tab-pane active">

                <Route path={`${url}`} exact >
                    <Build />
                </Route>
                <Route path={`${url}/build`} exact>
                    <Build />
                </Route>
                <Route path={`${url}/share`} exact>
                    <Share />
                </Route>
                <Route path={`${url}/results`} exact>
                    <Results />
                </Route>
                <Route path={`${url}/settings`} exact>
                    <Settings />
                </Route>
            </div>
        </div>

    )
}
export default TabContent;