import AppHeader from "./main/AppHeader";
import Events from "./main/Events";
import AppTools from "./main/AppTools";
import EventDetail from "./main/EventDetail";

import EventsProvider from "./tech/providers/EventsProvider";
import UsersProvider from "./tech/providers/UsersProvider";

const App = () => {
  const divStyles = {
    margin: "0 3vw",
    minHeight: "100vh",
  };

  return (
    <div style={divStyles}>
      <AppHeader />
      <AppTools />
      {/* nastavit router => zobrazi sa bud Events alebo EventDetail */}
      <UsersProvider>
        <EventsProvider>
          <Events />
          <EventDetail />
        </EventsProvider>
      </UsersProvider>
    </div>
  );
};

export default App;
