import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Contacts from './pages/main/Contacts';
import Home from './pages/main/Home';
import About from './pages/main/About';
import NotFound from './pages/main/NotFound';
import Category from './pages/main/Category';
import Recipe from './pages/main/Recipe';

function App() {
  const text = {
    title: "Welcome to TheMealDB",
    description: "Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers."
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About text={text} />}/>
          <Route path='contacts' element={<Contacts />}/>
          <Route path='category/:name' element={<Category />}/>
          <Route path='meal/:id' element={<Recipe />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
