// css
import "./style.module.css";
// component
import NavbarAbout from "../../Component/NavbarAbout";


const AboutApp = () => {
  return (
    <div>
      <section className="container_app">
        <div className="container_wrapper">
          <div className="form_container">
            <NavbarAbout />

            <h1>About The App</h1>
            <p>
              In this app you can add, delete, submit and edit items. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              debitis ab vitae animi, exercitationem ad iusto sit iure
              provident! Maiores et qui, quia ipsa alias voluptate ab laborum
              dicta omnis!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutApp;
