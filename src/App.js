import './App.css';
import { ThemeProvider } from "styled-components";
import { theme } from './theme'
import Cities from './Components/views/Cities'
import Layout from './Components/shared/Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <ToastContainer />
      <Layout>
        <Cities />
      </Layout>
    </ThemeProvider>

  );
}

export default App;
