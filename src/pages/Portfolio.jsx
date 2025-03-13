import { Card, Button } from 'react-bootstrap';

export default function Portfolio() {

    const handleMealMuseClick = () => {
        window.open("https://alexis-menendez.github.io/Project-1-Meal-Muse/", "_blank");
    };

    const handleWeatherForecastClick = () => {
        window.open("https://nicksweather.onrender.com/", "_blank")
    }
    return (
        <section>
          <h1>Portfolio</h1>
        <div className="portfolio-content">
            <Card className="card-1">
                <Card.Body>
                 <div className="button-container">
                    <Button className="text-button" onClick={handleMealMuseClick}>                   
                        Meal Muse
                    </Button>
                    <Button
                        variant="link"
                        className="no-bg-hover"
                        onClick={() => window.open("https://github.com/alexis-menendez/Project-1-Meal-Muse", "_blank")}>
                        <img
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                        src="./images/github-image.jpg" alt="GitHub"/>
                    </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="card-2">
                <Card.Body>
                 <div className="button-container">
                    <Button className="text-button" onClick={handleWeatherForecastClick}>
                        Weather
                    </Button>
                    <Button
                        variant="link"
                        className="no-bg-hover"
                        onClick={() => window.open("https://github.com/n6dd/Weather-Forecast", "_blank")}>
                        <img
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                        src="./images/github-image.jpg" alt="GitHub"/>
                    </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className="card-3">
                    <Card.Body>
                        <div className="button-container">
                            <span className="non-click">README</span>
                            <Button
                                variant="link"
                                className="no-bg-hover"
                                onClick={() => window.open("https://github.com/n6dd/README-Generator", "_blank")}
                            >
                                <img
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }}
                                    src="./images/github-image.jpg"
                                    alt="GitHub"
                                />
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="card-4">
                    <Card.Body>
                        <div className="button-container">
                            <span className="non-click">Employee</span>
                            <Button
                                variant="link"
                                className="no-bg-hover"
                                onClick={() => window.open("https://github.com/n6dd/Employee-Tracker", "_blank")}
                            >
                                <img
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }}
                                    src="./images/github-image.jpg"
                                    alt="GitHub"
                                />
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="card-5">
                    <Card.Body>
                        <div className="button-container">
                            <span className="non-click">Vehicle</span>
                            <Button
                                variant="link"
                                className="no-bg-hover"
                                onClick={() => window.open("https://github.com/n6dd/Vehicle-Builder", "_blank")}
                            >
                                <img
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }}
                                    src="./images/github-image.jpg"
                                    alt="GitHub"
                                />
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="card-6">
                    <Card.Body>
                        <div className="button-container">
                            <span className="non-click">Marketing</span>
                            <Button
                                variant="link"
                                className="no-bg-hover"
                                onClick={() => window.open("https://github.com/n6dd/marketing-challenge", "_blank")}
                            >
                                <img
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }}
                                    src="./images/github-image.jpg"
                                    alt="GitHub"
                                />
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
}