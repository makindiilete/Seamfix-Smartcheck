import "./App.less";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import PublicAreaRoute from "./Layout/PublicAreaRoute";
import routes from "./routes";
import HomePage from "./pages/Home/Home.page";
import ApplicationPage from "./pages/Application/Application.page";
import ServerPage from "./pages/Server/Server.page";
import GifSearchPage from "./pages/Gifhy/GifSearch.page";
import GifDetailsPage from "./pages/Gifhy/GifDetails.page";
import { GifContext } from "./Utils/context";
import { useState } from "react";

function App() {
  const history = useHistory();
  const [gifData, setGifData] = useState();
  return (
    <GifContext.Provider value={{ gifData, setGifData }}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <PublicAreaRoute exact component={HomePage} path={routes.HOME} />
            <PublicAreaRoute
              exact
              component={ApplicationPage}
              path={routes.APPLICATION}
            />
            <PublicAreaRoute
              exact
              component={ServerPage}
              path={routes.Server}
            />
            <PublicAreaRoute
              exact
              component={GifSearchPage}
              path={routes.SEARCH}
            />
            <PublicAreaRoute
              exact
              component={GifDetailsPage}
              path={`${routes.GIF_DETAILS}/:id`}
            />
            <PublicAreaRoute exact component={HomePage} path="*" />
          </Switch>
        </Router>
      </div>
    </GifContext.Provider>
  );
}

export default App;
