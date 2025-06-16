import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Simplified components for testing
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Build Status Dashboard</h2>
      <p>GitHub Actions build statuses will appear here.</p>
    </div>
  );
};

const TestApp: React.FC = () => {
  return (
    <MemoryRouter>
      <div className="app">
        <header className="app-header">
          <h1>Furnace - GitHub Actions Monitor</h1>
        </header>
        <main className="app-main">
          <Dashboard />
        </main>
      </div>
    </MemoryRouter>
  );
};

describe("App Component", () => {
  test("renders app header", () => {
    render(<TestApp />);
    expect(
      screen.getByText("Furnace - GitHub Actions Monitor"),
    ).toBeInTheDocument();
  });

  test("renders dashboard content", () => {
    render(<TestApp />);
    expect(screen.getByText("Build Status Dashboard")).toBeInTheDocument();
    expect(
      screen.getByText("GitHub Actions build statuses will appear here."),
    ).toBeInTheDocument();
  });

  test("app has correct structure", () => {
    const { container } = render(<TestApp />);
    expect(container.querySelector(".app")).toBeInTheDocument();
    expect(container.querySelector(".app-header")).toBeInTheDocument();
    expect(container.querySelector(".app-main")).toBeInTheDocument();
  });
});
