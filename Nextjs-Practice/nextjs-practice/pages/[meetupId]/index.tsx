import { GetStaticProps, GetStaticPaths } from 'next';
import MeetupDetail from '@/components/meetups/MeetupDetail';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  meetupId: string;
}

const MeetupDetails = () => {
  // const temp = {
  //   id: 'm1',
  //   title: 'A First Meetup',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/ChuaMotCot1.JPG/220px-ChuaMotCot1.JPG',
  //   address: 'Some address 5, 12345 Some City',
  //   description: 'This is first meetup!'
  // };
  // return <MeetupDetail {...temp} />;
  
  return <MeetupDetail />;
};

// export const getStaticPaths : GetStaticPaths = async (params) => {
  
// }

export const getStaticProps : GetStaticProps = async (context) => {
  // fetch data for a single meetup

  const { meetupId } = context.params as IParams;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/ChuaMotCot1.JPG/220px-ChuaMotCot1.JPG',
        address: 'Some address 5, 12345 Some City',
        description: 'This is first meetup!'
      }
    }
  }
}

export default MeetupDetails;