import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here


test("displays a top-level heading with the text `Hi, I'm David`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of the user with alt text", () => {
  render(<App />);
  const profileImage = screen.getByRole("img", { name: /profile picture/i });
  expect(profileImage).toBeInTheDocument();
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/i am a .+/i);
  expect(bioParagraph).toBeInTheDocument();
});

test("displays a link to the user's GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/DAVIDMWELU");
});

test("displays a link to the user's LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/david-mwelu-28a216354");
});
