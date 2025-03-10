import { Card, Button } from 'react-bootstrap';

export default function Portfolio() {
    return (
    <div className="portfolio-container">
        <div className="page-header">
            <h1>Portfolio</h1>
        </div>
        <div className="portfolio-content">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Button variant="secondary">Go to project</Button>
                    <Button variant="secondary">Go to github</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                    <Button variant="secondary">Go to project</Button>
                    <Button variant="secondary">Go to github</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                    <Button variant="secondary">Go to project</Button>
                    <Button variant="secondary">Go to github</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
    );
}
  