//header
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://res.cloudinary.com/djlbcycb5/image/upload/v1673600563/logo_qbzllx.png"
      alt="logo file villa"
    ></img>
  </a>
);
const Header = () => {
  return (
    <div className="header">
      <div>
        <Title />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
