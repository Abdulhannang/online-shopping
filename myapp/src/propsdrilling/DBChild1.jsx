import DBChild2 from "./DBChild2";

const DBChild1 = ({ users }) => {
  console.log(users);

  return (
    <div>
      <h1>DBChild1</h1>

      <DBChild2 users={users} />
    </div>
  );
};

export default DBChild1;
