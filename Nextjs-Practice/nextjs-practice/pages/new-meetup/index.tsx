import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetUpHandler = async (enteredMeetupData: any) => {
    console.log(enteredMeetupData);
    const response  = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Contents-Type': 'application/json'
      }
    });
    const data = await response.json();
    
    console.log(data);

    router.push('/');
  }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
};

export default NewMeetupPage;