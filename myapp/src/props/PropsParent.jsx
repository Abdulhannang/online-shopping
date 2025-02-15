import PropsChild from "./PropsChild";
import Users from "./Users";
const PropsParent = () => {
  let str = "Hello world";

  let user = {
    id: 1,
    ename: "John",
  };

  let dbData = [
    { id: 1, ename: "john", sal: 40000, designation: "Tester" },
    { id: 2, ename: "doe", sal: 60000, designation: "Dev" },
    { id: 3, ename: "clark", sal: 60500, designation: "Tester" },
    { id: 4, ename: "bruce", sal: 80000, designation: "Dev" },
    { id: 5, ename: "tom", sal: 90000, designation: "Tester" },
  ];

  function getDatafromChild(x) {
    console.log(x);
  }

  return (
    <div>
      <h1>PropsParent</h1>
      <PropsChild str={str} user={user} />

      <Users dbData={dbData} getDatafromChild={getDatafromChild} />
    </div>
  );
};

export default PropsParent;
