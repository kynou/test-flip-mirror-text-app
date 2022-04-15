import MyComponent from "./components/my-component";

const appTheme = { margin: "20px" };

function App() {
  return (
    <div style={appTheme}>
      <MyComponent text="Testing" />
    </div>
  );
}

export default App;
