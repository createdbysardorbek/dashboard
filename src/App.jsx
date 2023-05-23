import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Layout } from './layouts/Index';
import { Homepage } from './pages/Homepage';
import { Team } from './pages/Team';
import { Blog } from './pages/Blog';
import { Commerce } from './pages/Commerce';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Homepage></Homepage>}></Route>
          <Route path='/team' element={<Team></Team>}></Route>
          <Route path='/commerce' element={<Commerce></Commerce>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
        </Route>
        <Route path='/auth-login' element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
