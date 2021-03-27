import './App.css';
import { ThemeProvider } from "styled-components";
import { theme } from './theme'
import Cities from './Components/views/Cities'
import Layout from './Components/shared/Layout'
function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <Layout>
        <Cities />
      </Layout>
    </ThemeProvider>

  );
}

export default App;
