import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppHeader from "./main/AppHeader";
import Events from "./main/Events";
import EventDetail from "./main/EventDetail";

import EventsProvider from "./tech/providers/EventsProvider";
import UsersProvider from "./tech/providers/UsersProvider";
import TranslationProvider from "./tech/providers/TranslationProvider";

const App = () => {
  const divStyles = {
    margin: "0 3vw",
    minHeight: "100vh",
  };

  return (
    <div style={divStyles}>
      <BrowserRouter>
        <TranslationProvider>
          <UsersProvider>
            <EventsProvider>
              <AppHeader />
              <Routes>
                <Route index path="/" element={<Events />}></Route>
                <Route path="/:id" element={<EventDetail />}></Route>
              </Routes>
            </EventsProvider>
          </UsersProvider>
        </TranslationProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
