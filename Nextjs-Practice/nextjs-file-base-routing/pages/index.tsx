import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
// Next.js 의 public 은 정적 리소스 참조형으로 사용하게 된다.
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  );
}

export default HomePage;
