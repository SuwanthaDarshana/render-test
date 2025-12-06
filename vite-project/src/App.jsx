function App() {
  return (
    <>
      <h1>Hello</h1>
      <Customer />
      <Slary/>
   
    </>
  );
}
  function Customer() {
    return <h2>Suwanth Darshana</h2>;
  }

  const Slary = () => <h2>50000</h2>

  const Address = () => {
    return <h3>Colombo</h3>;
  }



export default App;
