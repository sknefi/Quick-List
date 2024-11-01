import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppHeader from "./main/AppHeader";
import Events from "./main/Events";
import EventDetail from "./main/EventDetail";

import EventsProvider from "./tech/providers/EventsProvider";
import UsersProvider from "./tech/providers/UsersProvider";
import ItemsProvider from "./tech/providers/ItemsProvider";

const App = () => {
  const divStyles = {
    margin: "0 3vw",
    minHeight: "100vh",
  };

  return (
    <div style={divStyles}>
      {/* nastavit router => zobrazi sa bud Events alebo EventDetail */}
      <UsersProvider>
        <EventsProvider>
          <ItemsProvider>
            <BrowserRouter>
              <AppHeader />
              <Routes>
                <Route index path="/" element={<Events />}></Route>
                <Route path="/:id" element={<EventDetail />}></Route>
              </Routes>
            </BrowserRouter>
          </ItemsProvider>
        </EventsProvider>
      </UsersProvider>
    </div>
  );
};

export default App;
