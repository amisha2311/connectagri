import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from "./pages/LoginPage";
import FarmerDashboard from "./pages/FarmerDashboard";

function App() {
  return (
    <SafeAreaProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<FarmerDashboard />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </SafeAreaProvider>
  );
}

export default App; 