import { useState } from "react";
import Login from "./Login"; // Login komponentini import qildik
import Header from "./Header"; // Header komponentini import qildik
import NavLinks from "./NavLinks"; // NavLinks komponentini import qildik
import Products from "./Products"; // Products komponentini import qildik

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login holatini saqlash uchun

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Kirish muvaffaqiyatli bo'lsa, state o'zgartiriladi
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <Header />   {/* Agar foydalanuvchi tizimga kirgan bo'lsa, Header va boshqa komponentlarni ko'rsatamiz */}
          <NavLinks />
          <Products />
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />   {/* Login forma ko'rsatiladi */}
      )}
    </div>
  );
};

export default App;
