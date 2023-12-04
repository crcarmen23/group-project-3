/* eslint-disable react/no-unescaped-entities */


const Home = () => {
    return (
        <div className="hero is-fullheight">
            <div className="hero-text">
                <p className="has-text-centered is-size-1">Every dish is a celebration of life's sweetest moments.</p>
                <a href="/menu" className="heroButton button is-size-5 has-text-centered m-3">View Menu</a>
                <br />
                <br />
                <a href="/login" className="heroButton button is-size-5 has-text-centered mr-3">Login</a>
                <a href="/signup" className="heroButton button is-size-5 has-text-centered ml-3 mb-5">Signup</a>
                <p className="has-text-centered mt-5 is-size-1">Dishes of the week:</p>
            </div>
        </div>
    );
};

export default Home;