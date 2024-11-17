function App() {
  return (
    <>
        <div className="toggle-container">
    <label for="themeToggle">Dark</label>
    <div className="toggle-switch" id="themeToggle" data-state="light"></div>
  </div>
  <div className="card">
    <div className="card-header">Short Circuit Evaluation</div>
    <div className="card-body">
      <p>You are logged in</p>
      <p>You are logged in as Alok</p>
    </div>
    <div className="card-footer">
      <button>Toggle Login State</button>
      <button>Set User</button>
      <button>Clear User</button>
    </div>
  </div>
    </>
  );
}

export default App;
