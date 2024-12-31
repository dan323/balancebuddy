import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../components/App';

// Hydrate the server-rendered HTML
hydrateRoot(document.getElementById('root') as HTMLElement, <App />);
