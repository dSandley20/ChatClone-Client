import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TestPage from './pages/TestPage';
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

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<TestPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
