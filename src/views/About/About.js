import "./About.css"
import HotelStaff from "../../assets/About/hotel staff image.png"
import { Link } from "react-router-dom"

function About() {

    return (<>
        <Navbar />
        <div className="about-container">
            <img src=""
                className="restaurant-img" />
        </div>

        <h1 className="about-title">About Us</h1>

        <div className="paragraph-image-container">

            <div className="image-container">

                <img src={HotelStaff} className="staff-image" />

            </div>

            <div className=" paragraph-container">
                <p className="paragraph-content">

                    <h2>About</h2>

                    A Restaurants and other food establishments utilize standardized recipes.
                    A recipe is a set of instructions that describes how to prepare a certain food.
                    Regular recipes often leave room for interpretation, giving ranges for cooking times,
                    offering suggestions for ingredient substitutions, or measuring by cups instead of weight.
                    Standardized recipes seek to reduce interpretation as much as possible.
                    A standardized recipe is defined as a recipe with specific ingredients and ingredient quantities,
                    a specific cook time, and a set of instructions that ensure a consistent product is produced each time the recipe is used.

                </p>


            </div>

        </div>
        <Footer />
    </>)

}