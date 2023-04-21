import ColFooter from "./RightSide/ColFooter";

const DarkMode = () => {
  const setDark = () => {
    document.getElementById("root").setAttribute("data-theme", "darkmode");
    localStorage.setItem("theme", "darkmode");
  };

  const setLight = () => {
    document.getElementById("root").setAttribute("data-theme", "lightmode");
    localStorage.setItem("theme", "lightmode");
  };

  const toggletheme = (e) => {
    if (e.target.checked) setDark();
    else setLight();
  };

  return (
    <div class="toggle-switch">
      <label class="switch-label" style={{ height: "30px", color: "white" }}>
        <input type="checkbox" class="checkbox" onChange={toggletheme} />
        <span class="slider"></span>
      </label>
    </div>
  );
};

export default DarkMode;
