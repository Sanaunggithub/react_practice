// props = read-only properties that are shared between components.
//         A parent componenet can send data to a child component.
//         <Component key=value />
//         props is a JS object.


import Student from "./Student";
function App() {
  return (
    <>
      <Student name="San Aung" age={30} student={true}/>
      <Student name="Mama" age={27} student={true}/>
      <Student name="John Havard" age={33} student={false}/>
      <Student/>
    </>
  );
}
export default App;
