import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import './App.css';

// opens the electron store to the app
declare global {
  interface Window {
    electron: {
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
      };
    };
  }
}

export default function App() {
  const queryClient = new QueryClient();

  // TODO create 404 page

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<TestPage />}>
            <Route path="auth" element={<LoginPage />} />
            {/* <Route path="/server">
            <Route path=":serverId" />
          </Route> */}
          </Route>
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
    </QueryClientProvider>
  );
}
