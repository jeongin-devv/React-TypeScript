import React from 'react';
import MainRouter from '../routes/index.js';
import Menu from '../components/Menu';

class App extends React.Component {
  render() {
    return(
      <div>
        <Menu />
        <MainRouter />
      </div>
    )
  }
}

export default App;


// import React from 'react';
// import { Route, Routes, useRoutes } from 'react-router-dom';
// import { Home, About } from 'pages';
// import Menu from 'components/Menu';
// import { Posts } from 'pages';

// class App extends React.Component {
//   render() {
//     return(
//       <div>
//         <Menu />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about/:name/*' element={<About />} >
//             <Route path='' element={<About />} />
//             <Route path='id' element={<About/>} />
//           </Route>
//           <Route path='/about' element={<About />} />  
//           <Route path='/posts' element={<Posts />} />
//         </Routes>
//       </div>
//     )
//   }
// }

// export default App;