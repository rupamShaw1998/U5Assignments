import "./styles.css";

export default function App() {
  const url = "https://stalwartlearning.com/wp-content/uploads/2019/06/Mern-Stack-Program.png"
  const links = ["Services", "Projects", "About"];
  return (
    <div className="App">
      <div id="black">
        <div>
          <Logo source={url} />
        </div>
        <div className="anchor">
          {
            links.map(ele => {
              return <Links link={ele} />
            })
          }
        </div>
        <div className="btn">
          <Button value="Contact" />
        </div>
      </div>
    </div>
  );
}

    // Components

function Logo(props) {
  return <img src={props.source} alt=""/>
}

function Links(props) {
  return <a href="#">{props.link}</a>
}

function Button(props) {
  return <button>{props.value}</button>
}