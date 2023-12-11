import DashItem from '../components/dashboard/DashItem';
import ListContent from '../components/dashboard/ListContent';
import AccessCode from '../features/space/AccessCode';
import Capacity from '../features/space/Capacity';
import Description from '../features/space/Description';
import Rooms from '../features/space/Rooms';
import {createData} from '../helpers/createData';

function Space() {
  // TODO: Add fecthing logic to dynamically display content of each space
  // Use the space ID from the url param to fetch the correct & desired space

  // Example query
  // const dynamicHeading = 'someDynamicHeading';

  const descriptionText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend placerat malesuada. Etiam vitae justo maximus, vestibulum velit eu, mattis nibh. Ut rhoncus nibh id neque tempus, id fringilla velit ullamcorper. Aliquam fermentum vestibulum libero in porttitor. Mauris et rhoncus mi. Donec ac efficitur arcu. Ut ex leo, elementum ac varius posuere, sollicitudin suscipit nulla.';

  const usersColumn = ['Name', 'Email', 'Date Added', 'Position'];

  const usersRow = Array.from(Array(10), () =>
    createData('John Doe', 'johndoe@gmail.com', '28/11/23', 'Web Developer')
  );

  return (
    <section className="grid h-full gap-5 md:grid-cols-23 md:grid-rows-18">
      <DashItem
        heading="Access Code"
        styling="col-start-1 col-end-8 row-span-5"
        content={<AccessCode accessCode={57493} />}
      />

      <DashItem
        heading="Capacity"
        styling="col-span-7 row-span-5"
        content={<Capacity roomsCount={25} peopleCount={85} />}
      />

      <DashItem
        heading="Rooms"
        styling="col-span-full col-start-[15] row-span-full row-start-1 rounded-xl"
        content={<Rooms />}
      />

      <DashItem
        heading="Description"
        styling="col-start-1 col-end-[15] row-start-6 row-span-5"
        isScroll={true}
        content={<Description descriptionText={descriptionText} />}
      />

      <DashItem
        heading="Users"
        styling="col-start-1 col-end-[15] row-start-[11] row-span-full"
        content={<ListContent columns={usersColumn} rows={usersRow} height={260} />}
      />
    </section>
  );
}

export default Space;