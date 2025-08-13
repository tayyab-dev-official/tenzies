// export default function Die(data) {
  
//     return (
//       <button
//         style={
//           data.isHeld
//             ? { backgroundColor: "green" }
//             : { backgroundColor: "white" }
//         }
//         onClick={data.toggle}
//         aria-pressed={data.isHeld}
//         aria-label={`Die with value ${data.value}, 
//             ${data.isHeld ? "held" : "not held"}`}
//       >
//         {data.value}
//       </button>
//     );
// }


export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button
      style={styles}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value}
    </button>
  );
}