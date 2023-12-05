/* eslint-disable react/no-unescaped-entities */
import MenuList from "../components/MenuList";

const Home = () => {
  return (
    <section>
        <section className="hero ">
      <section className="hero-body ">
        <div className="hero-text">
          <p className="has-text-centered is-size-1">
            Every dish is a celebration of life's sweetest moments.
          </p>
          <a
            href="/menu"
            className="heroButton button is-size-5 has-text-centered m-3"
          >
            View Menu
          </a>
          <br />
          <br />
          <a
            href="/login"
            className="heroButton button is-size-5 has-text-centered mr-3"
          >
            Login
          </a>
          <a
            href="/signup"
            className="heroButton button is-size-5 has-text-centered ml-3 mb-5"
          >
            Signup
          </a>
          

        </div>
        
      </section>
      
    </section>
        <p className="has-text-centered mt-5 is-size-1 recommended">Recommendations :</p>
          <MenuList recommended={true}/>
    </section>
    
  );
};

export default Home;
