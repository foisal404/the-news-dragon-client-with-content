import moment from "moment";
import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt ,FaRegStar,FaStar,FaRegEye} from "react-icons/fa";
import Rating from "react-rating";

const NewsCart = ({ data }) => {
  const {
    _id,
    author,
    image_url,
    total_view,
    details,
    title,
    thumbnail_url,
    rating,
  } = data;
  return (
    <div>
      <Card className="my-4">
        <Card.Header className="d-flex align-items-center ">
          <div>
            <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          </div>
          <div className="flex-grow-1 px-3">
            <p>{author?.name}</p>
            <p>{moment(author?.published_date).format("D-M-YYYY")}</p>
          </div>
          <div >
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 100 ? (
              <>
                {details.slice(0, 100)}...{" "}
                <Link to={`/news/${_id}`}>See More</Link>
              </>
            ) : (
              details
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex  align-items-center">
            <div className="d-flex align-items-center flex-grow-1">
                <Rating
                    placeholderRating={rating?.number}
                    emptySymbol={
                    <FaRegStar/>
                    }
                    placeholderSymbol={
                        <FaStar/>
                    }
                    fullSymbol={
                    <FaStar/>
                    }
                    readonly
                />
                <p className="m-0 px-2">{rating?.number}</p>
            </div>
            <p className="m-0"><FaRegEye className="mx-2"/>{total_view}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCart;
