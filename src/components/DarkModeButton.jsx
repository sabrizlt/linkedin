const DarkMode = ()=>{
const setDark= () =>{
    document.getElementById("root").setAttribute("data-theme", "darkmode");
    localStorage.setItem("theme", "darkmode");
  }
 setDark()
  const setLight= () =>{
    document.getElementById("root").setAttribute("data-theme", "lightmode");
  }

  const toggletheme = (e) =>{
if(e.target.checked) setDark();
else setLight();
  }

return(
    <div class="toggle-switch">
    <label class="switch-label">
      <input type="checkbox" class="checkbox" onChange={toggletheme} defaultChecked="true"/>
      <span class="slider"></span>
    </label>
  </div>  
)


}

export default DarkMode