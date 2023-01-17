import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetUpHandler = (enteredMeetupData: any) => {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
};

export default NewMeetupPage;