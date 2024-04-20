import "./App.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>react pizza</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        alt="pizza"
        src="pizza/mango.png"
        pizzaName="Pizza Spinachi"
        pizzaDes="Tomato, mozarella, spnich, and ricotta cheese"
        price={10}
      ></Pizza>
      <Pizza
        alt="pizza"
        src="pizza/order.png"
        pizzaName="Pizza Spegeti"
        pizzaDes="Potatto, spnich, cheese, and butter"
        price={12}
      ></Pizza>
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img alt={props.alt} src={props.src}></img>
      <div>
        <h1>{props.pizzaName}</h1>
        <p>{props.pizzaDes}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open");
  // } else {
  //   alert("Sorry we're closed");
  // }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
}

export default App;
