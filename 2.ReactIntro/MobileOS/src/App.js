import "./styles.css";

export default function App() {
  const os = ["Android","Blackerry","iPhone","Windows"];
  const co = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h2>Mobile Operating System</h2>
      <ul>
        {os.map((ele) => {
          return <List list={ele} />
        })}
      </ul>
      <h2>Mobile Manufacturers</h2>
      <ul>
        {co.map((ele) => {
          return <List list={ele} className="lists" />
        })}
      </ul>
    </div>
  );

}

function List(props) {
  console.log(props);
  return <li> {props.list} </li>;
}
