import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App.tsx'
import './index.css'

// Internal Components
import { WalletProvider } from './components/WalletProvider.tsx';
import { WrongNetworkAlert } from './components/WrongNetworkAlert.tsx';
import { Toaster } from './components/ui/toaster.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <WrongNetworkAlert />
        <Toaster />
      </QueryClientProvider>
    </WalletProvider>
  </StrictMode>,
)
