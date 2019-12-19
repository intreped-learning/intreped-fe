import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import YouTube from 'react-youtube';
import './CourseCard.scss';

const CourseCard = (props) => {
  const opts = {
    height: '135',
    width: '240',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  return (
    <div className="coursecards">
      <Card>
        <YouTube
          videoId="BrjnccFiAfE"
          opts={opts}
        />
        <CardBody>
          <CardTitle>Engagement Strategy</CardTitle>
          <CardSubtitle>Teach Like A Champion Technique 1</CardSubtitle>
          <CardText>No Opt Out is a useful tool to get all students to the right answer, as often as possible, even if only to repeat the correct answer.</CardText>
          <Button>Add To My List!</Button>
          <Button>Begin Course</Button>
        </CardBody>
      </Card>
      <Card>
        <YouTube
          videoId="BrjnccFiAfE"
          opts={opts}
        />
        <CardBody>
          <CardTitle>Engagement Strategy</CardTitle>
          <CardSubtitle>Teach Like A Champion Technique 1</CardSubtitle>
          <CardText>No Opt Out is a useful tool to get all students to the right answer, as often as possible, even if only to repeat the correct answer.</CardText>
          <Button>Add To My List!</Button>
          <Button>Begin Course</Button>
        </CardBody>
      </Card>
      <Card>
        <YouTube
          videoId="BrjnccFiAfE"
          opts={opts}
        />
        <CardBody>
          <CardTitle>Engagement Strategy</CardTitle>
          <CardSubtitle>Teach Like A Champion Technique 1</CardSubtitle>
          <CardText>No Opt Out is a useful tool to get all students to the right answer, as often as possible, even if only to repeat the correct answer.</CardText>
          <Button>Add To My List!</Button>
          <Button>Begin Course</Button>
        </CardBody>
      </Card>
      <Card>
        <YouTube
          videoId="BrjnccFiAfE"
          opts={opts}
        />
        <CardBody>
          <CardTitle>Engagement Strategy</CardTitle>
          <CardSubtitle>Teach Like A Champion Technique 1</CardSubtitle>
          <CardText>No Opt Out is a useful tool to get all students to the right answer, as often as possible, even if only to repeat the correct answer.</CardText>
          <Button>Add To My List!</Button>
          <Button>Begin Course</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CourseCard;