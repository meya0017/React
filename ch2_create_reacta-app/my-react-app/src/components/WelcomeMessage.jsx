function WelcomeMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back</h1>;
  } else {
    return <h2>Please login</h2>;
  }
}

export default WelcomeMessage;
