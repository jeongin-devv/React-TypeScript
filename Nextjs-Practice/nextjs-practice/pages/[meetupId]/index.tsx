import MeetupDetail from '@/components/meetups/MeetupDetail';

const MeetupDetails = () => {
  const temp = {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/ChuaMotCot1.JPG/220px-ChuaMotCot1.JPG',
    address: 'Some address 5, 12345 Some City',
    description: 'This is first meetup!'
  };
  return <MeetupDetail {...temp} />;
};

export default MeetupDetails;