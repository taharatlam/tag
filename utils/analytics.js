import ReactGA from "react-ga";

export const gaCTA = (eventName) => {
  ReactGA.event({
    category: "test-category",
    action: decodeURIComponent(eventName.toUpperCase()),
  });
};
