import Header from "./components/Layout/Header.tsx";
import Footer from "./components/Layout/Footer.tsx";
import AppRoutes from "./components/Layout/AppRoutes.tsx";
import './index.css';

function App() {
  return (
      <>
          <Header />
          <AppRoutes />
          <Footer />
      </>
  )
}

export default App
