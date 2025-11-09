import './index.css';
import Header from "./components/Header/Header.tsx";
import AppRoutes from "./components/AppRoutes/AppRoutes.tsx";
import Footer from "./components/Footer/Footer.tsx";

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
