import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ServerProvider } from './context/ServerContext';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import LoadingPage from './pages/LoadingPage';
import ServerPage from './pages/ServerPage';
import './App.css';

export default function App() {
  const queryClient = new QueryClient();

  // TODO create 404 page

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ServerProvider>
          {/* <ThemeProvider theme={theme}> */}
          <Router>
            <Routes>
              <Route path="/" element={<LoadingPage />} />
              <Route path="/auth" element={<LoginPage />} />
              <Route path="/server" element={<ServerPage />} />

              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>Hi! I think you are lost!</p>
                  </main>
                }
              />
            </Routes>
          </Router>
          {/* </ThemeProvider> */}
        </ServerProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
