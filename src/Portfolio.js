
import React, { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
    const [projects] = useState([
        {
            id: 1, title: "Domestic web app",
             description: "A web application that aims to connect users with services from domestic workers around them with premium subscriptions on a weekly, monthly, or yearly basis.",
            Link:"https://photogram-e48d5.web.app" ,
            src:"https://photogram-e48d5.web.app/static/media/phonep.0c0ff44a.svg"
 },
        {
            id: 2, title: "News Website", 
            description: "A web application that shows latest update for advertisement, breaking news and sports",
            Link:"https://linkedin-clon-yt.web.app/",
            src: "https://static01.nyt.com/images/2023/09/26/multimedia/26pol-debate-setup-twcf/26pol-debate-setup-twcf-threeByTwoSmallAt2X.jpg"
           
 },
        {
            id: 3, title: "Food Ordering Platform",
            description: "A web application that allow users to place and order food from vendors around them.",
            Link: " https://food-order-24384.web.app",
            src: "https://food-order-24384.web.app/static/media/meals.2971f633fc1382581cbf.jpg"
        }, 
    ]);

    return (
        <section className="portfolio">
            <h1>Ochieng Portfolio</h1>
            <div className="outerdiv">
                {projects.map((project) => (
                    <div className="inerdiv" key={project.id}>
                        <h3 className="title">{project.title}</h3>
                        <img className="image" src={project.src} alt="" />
                        <p className="discription">{project.description}</p>

                        <a href={project.Link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
