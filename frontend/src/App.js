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
import PayloadProvider from './context/Payload';

function App() {
  return (
    <Router>
      <ContextProvider>

        <FormContextProvider>
          <QuestionContextProvider>
            <ViewportProvider>
              <PayloadProvider>
                <Switch>
                  <Route path="/form/:form_id/questions/:q_id">
                    <MobileBuild />
                  </Route>
                  <Route path="/form/:form_id">
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
              </PayloadProvider>

            </ViewportProvider>
          </QuestionContextProvider>


        </FormContextProvider>

      </ContextProvider>

    </Router>

  );
}

export default App;
