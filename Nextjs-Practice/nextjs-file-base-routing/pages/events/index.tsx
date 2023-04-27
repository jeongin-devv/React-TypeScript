import { useRouter } from 'next/router';
import EventsSearch from '@/components/events/events-search';
import { getAllEvents } from '../../dummy-data';
import EventList from '@/components/events/event-list';

const AllEventPage = () => {
	const router = useRouter();
	const events = getAllEvents();
	const findEventsHandler = (year: any, month: any) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	}

	return (
		<div>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</div>
	);
}

export default AllEventPage;
