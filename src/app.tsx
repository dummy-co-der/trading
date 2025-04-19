import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Pricing, ContactUs, FaqPage, Login, Signup, Portfolio, Strategy, Screener, Simulator } from "#pages"
import { NavBar } from "#components";
import { AuthProvider } from "#context";

export default function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/screener" element={<Screener />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
