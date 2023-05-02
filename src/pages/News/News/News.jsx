import React from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const News = () => {
    const loader = useLoaderData() ;
    const {_id,author,image_url,total_view,details,title,thumbnail_url,rating}=loader;
  return (
    <div>
      <h2>Dragon News</h2>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
