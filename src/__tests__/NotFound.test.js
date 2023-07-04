import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";
import WhacADev from "../components/WhacADev";

describe("<NotFound />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it("renders without crashing", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("displays correct links", () => {
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(4);
    expect(links[0]).toHaveTextContent("Home");
    expect(links[1]).toHaveTextContent("Browse");
    expect(links[2]).toHaveTextContent("Sign Up");
  });

  it("navigates to Home page when Home link is clicked", () => {
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("navigates to Browse page when Browse link is clicked", () => {
    userEvent.click(screen.getByText("Browse"));
    expect(screen.getByText("Browse")).toBeInTheDocument();
  });

  it("navigates to Sign Up page when Sign Up link is clicked", () => {
    userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
});

describe("<NotFound />", () => {
  it("renders the correct score when game is not over", () => {
    render(<NotFound />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});