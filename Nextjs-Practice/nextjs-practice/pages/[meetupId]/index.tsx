import { GetStaticProps, GetStaticPaths } from 'next';
import MeetupDetail from '@/components/meetups/MeetupDetail';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  meetupId: string;
}

const MeetupDetails = ({ meetupData } : any) => {
  // const data = {
  //   id: 'm1',
  //   title: 'A First Meetup',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/ChuaMotCot1.JPG/220px-ChuaMotCot1.JPG',
  //   address: 'Some address 5, 12345 Some City',
  //   description: 'This is first meetup!'
  // };
  // return <MeetupDetail {...data} />;
  
  return <MeetupDetail {...meetupData} />;
};

export const getStaticPaths : GetStaticPaths = async (params) => {
  return {
    // fallback : 특정 값에 대해서만 url 을 처리할 것인가?
    // - false : paths 내의 목록 처리
    // - true : paths 외의 목록도 처리
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        }
      },
      {
        params: {
          meetupId: 'm2',
        }
      },
    ]
  }
}

export const getStaticProps : GetStaticProps = async (context) => {
  // fetch data for a single meetup

  const { meetupId } = context.params as IParams;
// 서버에서만 동작한다.
// 브라우저에서는 확인 할 수 없음.
  console.log(meetupId);

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