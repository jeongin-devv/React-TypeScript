// import { useEffect, useState } from 'react';
import { GetStaticProps, GetServerSideProps } from 'next'
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/ChuaMotCot1.JPG/220px-ChuaMotCot1.JPG',
    address: 'Some address 5, 12345 Some City',
    description: 'This is first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Th%C3%A1p_R%C3%B9a_4.jpg/800px-Th%C3%A1p_R%C3%B9a_4.jpg',
    address: 'Some address 4, 54321 Some City',
    description: 'This is Second meetup!'
  }
]

interface HomePageProps {
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }
}

const HomePage = (props : HomePageProps) => {
  // const [loadedMeetups, setLoadedMeetups] = useState<any>([]);
  
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />
};

// 페이지를 사전에 빌드 프로세스에서 받아오기때문에, SEO에 장점을 가진다.
export const getStaticProps : GetStaticProps= async () => {
  // API 를 호출하거나, FileSystem, Browser Storage 에 접근 할 수도 있다.
  return {
    // Page 에서 직접 사용할수 있는 Component Props
    props: {
      meetups: DUMMY_MEETUPS
    },
    // props에 전달하는 데이터가 자주 바뀌는 데이터일 경우
    // 점진적으로 정적 데이터를 생성하기 위해 추가하는 선택자.
    revalidate: 10
    // 새로 데이터를 불러오는 시간을 입력해주면 주기적으로 데이터가 변경된다.
    // 데이터가 업데이트 되는 시점에 따라 시간을 설정해주면 된다.(초 단위)
    // 한번 배포해놓으면 재배포 없이 새로고침 된다.
  };
}

// // getStaticProps와 다르게 빌드 프로세스에서는 실행되지 않는다.
// // 대신 요청할 때마다 서버에서 실행된다.
// export const getServerSideProps : GetServerSideProps = async (context) => {
//   // API 를 호출하거나, FileSystem, Browser Storage 에 접근 할 수도 있다.
//   // 클라이언트 사이드에서 실행되지 않고, 서버 사이드에서만 실행되는 코드.
//   // 인증 등의 기능을 사용해서, 사용자에게 코드를 감출 수 있다.

//   const { req, res } = context;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

// Server에 매번 재 요청 할 필요 없이 (ex. 인증을 거치지 않는 데이터들)
// 정적인 데이터를 화면에 렌더링 하는 경우, getStaticProps 를 사용하는 것이
// 사용자 경험에서 좀 더 나을 수 있디. (ex. 화면의 초기 렌더링 속도와 같은..)

export default HomePage;