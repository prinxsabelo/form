import ContextProvider from "./context/Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormContextProvider from "./context/FormContext";
import FormBuilder from "./formBuilder/pages/FormBuilder";
import Header from "./shared/header/Header";
import Wrapper from "./shared/wrapper/Wrapper";
import Modal from "./shared/collection/Modal";
import QuestionContextProvider from "./context/QuestionContext";
import ViewportProvider from "./context/ViewportContext";
import MobileBuild from "./formBuilder/pages/MobileBuild";

function App() {
  return (
    <Router>
      <ContextProvider>
        <FormContextProvider>
          <QuestionContextProvider>
            <ViewportProvider>
              <Switch>
                <Route path="/form/:formId/questions/:questionId">
                  <MobileBuild />
                </Route>
                <Route path="/form/:formId">
                  <FormBuilder />
                </Route>

                <Route path={["/", "/home", "/forms", "/trash"]} exact>
                  <div className=" bg-white text-black w-full text-white flex flex-col h-screen">
                    <Header />
                    <Wrapper />
                    <Modal />

                  </div>
                </Route>
              </Switch>
            </ViewportProvider>
          </QuestionContextProvider>


        </FormContextProvider>

      </ContextProvider>

    </Router>

  );
}

export default App;
