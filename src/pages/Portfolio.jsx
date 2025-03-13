import { Card, Button } from 'react-bootstrap';

function Project({ title, liveLink, repoLink, className }) {
    return (
        <Card className={`project-card ${className}`}>
            <Card.Body>
                <div className="button-container">
                    {liveLink ? (
                        <Button className="text-button" onClick={() => window.open(liveLink, "_blank")}>
                            {title}
                        </Button>
                    ) : (
                        <span className="non-click">{title}</span>
                    )}
                    <Button
                        variant="link"
                        className="no-bg-hover"
                        onClick={() => window.open(repoLink, "_blank")}
                    >
                        <img
                            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                            src="./images/github-image.jpg"
                            alt="GitHub"
                        />
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default function Portfolio() {
    const projects = [
        { title: "Meal Muse", liveLink: "https://alexis-menendez.github.io/Project-1-Meal-Muse/", repoLink: "https://github.com/alexis-menendez/Project-1-Meal-Muse", className: "card-1" },
        { title: "Weather", liveLink: "https://nicksweather.onrender.com/", repoLink: "https://github.com/n6dd/Weather-Forecast", className: "card-2" },
        { title: "README", liveLink: "", repoLink: "https://github.com/n6dd/README-Generator", className: "card-3" },
        { title: "Employee", liveLink: "", repoLink: "https://github.com/n6dd/Employee-Tracker", className: "card-4" },
        { title: "Vehicle", liveLink: "", repoLink: "https://github.com/n6dd/Vehicle-Builder", className: "card-5" },
        { title: "Marketing", liveLink: "", repoLink: "https://github.com/n6dd/marketing-challenge", className: "card-6" }
    ];

    return (
        <section>
            <header>Portfolio</header>
            <div className="portfolio-content">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}