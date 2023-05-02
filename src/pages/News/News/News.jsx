import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
    const loader = useLoaderData() ;
    const {_id,author,image_url,total_view,details,title,thumbnail_url,rating,category_id}=loader;
  return (
    <div>
      <h2>Dragon News</h2>
      <Card className="p-2 my-3">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Button variant="danger"><Link className="text-decoration-none text-light" to={`/category/${category_id}`}><FaArrowLeft/> All news in the Category</Link></Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
