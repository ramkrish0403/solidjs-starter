import { Router, useRoutes } from '@solidjs/router';
import { ThemeProvider } from '@suid/material/styles';
import { routes } from './app';
import {SideBar} from './components';
import theme from './theme';

function App() {
  const Route = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: 'flex' }}>
          <SideBar />
          <main>
            <Route />
          </main>
        </div>
      </Router>
    </ThemeProvider>    
  );
}

export default App;