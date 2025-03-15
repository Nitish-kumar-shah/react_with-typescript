import Counter from "./components/Counter";
import Form from "./components/Form";
import Profile from "./components/Profile";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Counter />
      <Profile />
      <Todo />
      <Form />
    </div>
  );
};

export default App;
