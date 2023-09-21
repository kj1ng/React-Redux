
import './App.css';
import AddTask from './components/AddTask'
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
     <h2> Redux To-do List Project</h2>
     <AddTask/>
     <ListTask/>
    </div>
  );
}

export default App;
