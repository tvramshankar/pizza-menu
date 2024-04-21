import "./App.css";
import pizzaData from "./data";
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
      <ul className="pizzas">
        {pizzaData.map((u) => (
          <Pizza data={u} key={u.name}></Pizza>
        ))}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img alt={props.alt} src={props.data.photoName}></img>
      <div>
        <h1>{props.data.name}</h1>
        <p>{props.data.ingredients}</p>
        <span>{props.data.price}</span>
      </div>
    </li>
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
