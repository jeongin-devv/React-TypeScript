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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />
};

export default HomePage;