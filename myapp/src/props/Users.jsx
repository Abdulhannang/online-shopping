const Users = ({ dbData, getDatafromChild }) => {
  console.log(dbData);

  getDatafromChild("Hiii");

  return (
    <div>
      <h1>Users</h1>
      {dbData.map(({ id, ename, sal, designation }) => {
        return (
          <div key={id}>
            <h1>Username : {ename}</h1>
            <p>Salary : {sal}</p>
            <p>Designation : {designation}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Users;
