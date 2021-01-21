/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from './star_rating';
import Helpful from './helpful';
import Experience from './experience';
import Recommend from './recommend';

const Review = (allReviews) => (
  <div>
    {allReviews.reviews.data.map((review) => (
      <Container className="reviewBlock" key={review._id}>

        <Row>
          {moment(review.createdAt).startOf('hour').fromNow()}
        </Row>

        <Row>
          <Rating rating={review.rating} />
        </Row>

        <Row className="username">
          { review.username }
        </Row>

        <Row>
          <Recommend review={review} />
        </Row>

        <Row>
          <Col sm={8}>{ review.review }</Col>
          <Col sm={4}>
            <Experience review={review} />
          </Col>
        </Row>

        <Row>
          <Helpful review={review} />
        </Row>
      </Container>
    ))}
  </div>
);

export default Review;
