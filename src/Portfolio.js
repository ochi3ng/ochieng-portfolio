
import React, { useState } from "react";
import "./portfolio.css";
import Navbar from "./Navbar";

const Portfolio = () => {
    const [projects] = useState([
        {
            id: 1, title: "Domestic web app",
             description: "A web application that aims to connect users with services from domestic workers around them with premium subscriptions on a weekly, monthly, or yearly basis.Build using: React, TypeScript, Redux",
            Link:"https://photogram-e48d5.web.app" 
 },
        {
            id: 2, title: "News Website", 
            description: "A web application that shows latest update for advertisement, breaking news and sports",
            Link:"https://linkedin-clon-yt.web.app/"
 },
        {
            id: 3, title: "Food Ordering Platform",
            description: "A web application that allow users to place and order food from vendors around them.",
            Link: " https://food-order-24384.web.app"
        }, 
    ]);

    return (
        <section className="portfolio">
            <Navbar/>
            <h2>Ochieng Portfolio</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.Link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Portfolio;
