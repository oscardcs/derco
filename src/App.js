import useApi from './hooks/useApi';
import Loading from './components/Loading';
import Error from './components/Error';
import Posts from './components/Posts';

import './App.css';

function App() {
  const { isLoading, data, error } = useApi();

  return (
    <div className="App">
      { isLoading && <Loading />}
      { error && <Error error={error}/>}
      { data &&  <Posts posts={data}/>}
    </div>
  );
}

export default App;
