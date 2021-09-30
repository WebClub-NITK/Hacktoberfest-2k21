import LeadContainerView from "./components/leadContainerView";
import LeadFormContainerView from "./components/leadFormContainerView";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row-lg">
          <LeadFormContainerView />
        </div>
        <div className="row-lg">
          <LeadContainerView />
        </div>
      </div>
    </div>
  );
}

export default App;
