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
  const [icon, set_icon] = useState({ display: "none" });
  const open_menu = () => {
    set_icon({ display: "block" });
  };
  const close_menu = () => {
    set_icon({ display: "none" });
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
        <div className="mobile-menu" onClick={open_menu}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            width="30"
            height="30"
          />
        </div>
      </div>
      <div className="sidebar">
        <div style={icon} className="side_desktop-menu">
          <div className="btn_closel" onClick={close_menu}>
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
  const [tag, set_tag] = useState({ visibility: "hidden" });
  function show_box() {
    set_tag({ visibility: "visible" });
  }

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

      <div style={tag} className="list_2">
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
