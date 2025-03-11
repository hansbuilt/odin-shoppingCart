import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="leftSide">
        <div className="logo">Logo Here</div>
        <div>cat1</div>
        <div>cat2</div>
        <div>cat3</div>
      </div>
      <div className="rightSide">
        <span>srch</span>
        <span>profile</span>
        <span>cart</span>
      </div>
    </div>
  );
}

export default Header;
