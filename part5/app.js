const { useState } = React;
function Welcome() {
  const [msg, set_msg] = useState("Welcome message");
  const switch_msg = () => {
    if (msg === "Welcome message") {
      set_msg("hello world");
    } else {
      set_msg("Welcome message");
    }
  };
  return (
    <div className="welcome" onClick={switch_msg}>
      <div className="text">{msg}</div>
    </div>
  );
}

function Header() {
  const [icon, set_icon] = useState("mobile-menu");
  const switch_menu = () => {
    if (icon === "mobile-menu") {
      set_icon("btn_close");
    } else {
      set_icon("mobile-menu");
    }
  };

  return (
    <>
      <div className="frame">
        <div className="'headline">Website/Logo</div>
        <div className="desktop-menu">
          <div className="item">item 1</div>
          <div className="item">item 2</div>
          <div className="item">item 3</div>
          <div className="item">item 4</div>
        </div>
        <div className={icon} onClick={switch_menu}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            width="30"
            height="30"
          />
        </div>
      </div>
      <div className="sidebar">
        <div className="side_desktop-menu">
          <div className={icon} onClick={switch_menu}>
            <p>X</p>
          </div>
          <div className="item">item 1</div>
          <div className="item">item 2</div>
          <div className="item">item 3</div>
          <div className="item">item 4</div>
        </div>
      </div>
    </>
  );
}

function Section() {
  const [tag, set_tag] = React.useState("");
  const show_box = () => {
    if (tag === "") {
      set_tag("list_2");
    } else {
      set_tag("");
    }
  };
  return (
    <section>
      <h2>Section Title</h2>
      <div className="list">
        <div className="product">Context Box 1</div>
        <div className="product">Context Box 2</div>
        <div className="product">Context Box 3</div>
        <div className="product">Context Box 4</div>
      </div>

      <div className="button-box">
        <button onClick={show_box}>call to action</button>
      </div>

      <div className={tag}>
        <div className="product">Context Box 5</div>
        <div className="product">Context Box 6</div>
        <div className="product">Context Box 7</div>
        <div className="product">Context Box 8</div>
      </div>
    </section>
  );
}
function MyApp() {
  return (
    <div className="webpage">
      <Header />
      <Welcome />
      <Section />
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
