import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio UI error:', error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-3xl text-cyan-400">
          <i className="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-100">Something went wrong</h1>
          <p className="text-slate-400 text-sm mt-2 max-w-md">
            A section of this page failed to render. Reloading usually fixes it.
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition-all"
        >
          Reload Page
        </button>
      </div>
    );
  }
}
