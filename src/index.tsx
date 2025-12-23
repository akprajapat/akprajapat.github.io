import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add error boundary
class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('React Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl text-accent mb-4">Something went wrong</h1>
            <button 
              className="text-text-primary hover:text-accent"
              onClick={() => window.location.reload()}
            >
              Try reloading the page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Wrap the app in error boundary and strict mode
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Initialize performance monitoring
reportWebVitals(console.log);
