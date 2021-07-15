import RepositoryViewer from '../../components/RepositoryViewer/RepositoryViewer';
import UserViewer from '../../components/UserViewer/UserViewer';
import './App.css';

function App() {

  return (
    <div className="dec-app-grid">
      <UserViewer></UserViewer>
      <RepositoryViewer></RepositoryViewer>
    </div>
  );
}

export default App;
