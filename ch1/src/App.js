import "./App.css";
import Box from "./Box";
import Title from "./Title";

function App() {
  const number = 1;

  return (
    <div>
      <Title />
      <section>
        <Box number={number} visible/>
        <Box number={number}/>
        <Box number={number}/>
        <Box number={number}/>
      </section>
    </div>
  );
}

export default App;
