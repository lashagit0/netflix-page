import "./Theme.css";

export default function ThemeBtn() {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="wrapper">
      <label className="switch">
        <input type="checkbox" onChange={switchTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
