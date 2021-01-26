import './App.css';
import NavbarComponent from './components/Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer.jsx';
function App() {
  return (
    <>
      <NavbarComponent/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </>
  );
}

export default App;
