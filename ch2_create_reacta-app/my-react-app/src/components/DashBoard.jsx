function DashBoard({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Umeingia tayari!</h1> : <h2>Tafadhali ingia</h2>}
      {isLoggedIn ? <p> yes-true</p> : <p> no-false </p> }  





    </div>
  );
}

export default DashBoard