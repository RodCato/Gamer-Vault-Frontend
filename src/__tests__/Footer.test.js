import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe('<Footer />', () => {
  it('has a link', () => {
      render(
          <BrowserRouter>
              <Footer />
          </BrowserRouter>
      )
      screen.logTestingPlaygroundURL()
      const footLink = screen.getByRole('link', {
          name: /JVC/gi
      })
      expect(footLink).toBeInTheDocument()  
  })
})
