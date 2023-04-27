import EventItem from "./event-item";
import classes from './event-list.module.css'

const EventList = (props: any) => {
	const { items } = props;
	return (
		<ul className={classes.list}>
			{items.map((event : any) => <EventItem key={event.id} {...event}/>)}
		</ul>
	)
};

export default EventList;