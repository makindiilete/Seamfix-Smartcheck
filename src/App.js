import "./App.less";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import PublicAreaRoute from "./Layout/PublicAreaRoute";
import routes from "./routes";
import HomePage from "./pages/Home/Home.page";
import ApplicationPage from "./pages/Application/Application.page";
import ServerPage from "./pages/Server/Server.page";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PublicAreaRoute exact component={HomePage} path={routes.HOME} />
          <PublicAreaRoute
            exact
            component={ApplicationPage}
            path={routes.APPLICATION}
          />
          <PublicAreaRoute exact component={ServerPage} path={routes.Server} />
          <PublicAreaRoute exact component={HomePage} path="*" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
