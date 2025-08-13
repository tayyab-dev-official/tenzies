// import { nanoid } from "nanoid";
// import { useState, useEffect, useRef } from "react";
// import Greet from "react-confetti";

// import Die from "./Die";

// export default function App() {
//   const [allDie, setAllDie] = useState(() => generateAllNewDice());
//   const buttonRef = useRef(null);
//   console.log(buttonRef);

//   function gameOver() {
//     // const remainingDie = allDie.filter((die) => !die.isHeld);

//     // const isAllSame = () => {
//     //     const comparingValue = allDie[0].value
//     //     for (let i=0; i<allDie.length; i++){
//     //         if (comparingValue === allDie[i].value){
//     //             continue
//     //         }
//     //         return false
//     //     }
//     //     return true
//     // }
//     // return remainingDie.length === 0 || isAllSame()

//     const isAllHeld = allDie.every((die) => die.isHeld);
//     const isAllSame = allDie.every((die) => die.value === allDie[0].value);
//     // console.log(`isAllHeld = ${isAllHeld} || isAllSame = ${isAllSame}`);

//     return isAllHeld || isAllSame;
//   }

//   const gameWon = gameOver();

//   useEffect(() => {
//     if (gameWon) {
//       buttonRef.current.focus();
//     }
//   }, [gameWon]);

//   function generateAllNewDice() {
//     console.log("New game started!");
//     return new Array(10).fill(0).map(function () {
//       return {
//         value: Math.ceil(Math.random() * 6),
//         isHeld: false,
//         id: nanoid(),
//       };
//     });
//   }

//   function startNewGame() {
//     setAllDie(generateAllNewDice());
//   }

//   function rollDie() {
//     if (gameWon) {
//       console.log("Game Over!");
//       startNewGame();
//     } else {
//       setAllDie((prevAllDie) =>
//         prevAllDie.map((die) =>
//           die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
//         )
//       );
//     }
//   }
//   //   function hold(id) {
//   //     setAllDie(oldDie => {
//   //             return oldDie.map(die => {
//   //                 return die.id === id ?
//   //                 { ...die, isHeld: !die.isHeld } :
//   //                 die
//   //             })
//   //     })
//   //   }

//   function hold(id) {
//     setAllDie((allDice) =>
//       allDice.map((die) =>
//         id === die.id ? { ...die, isHeld: !die.isHeld } : die
//       )
//     );
//   }

//   return (
//     <main>
//       <div aria-live="polite" className="sr-only">
//         {gameWon && (
//           <p>Congratulations! You won! Press "New Game" to start again.</p>
//         )}
//       </div>
//       <div>
//         <h1>Tenzies</h1>
//         <p>
//           Roll until all dice are the same. Click each die to freeze it at its
//           current value between rolls.
//         </p>
//       </div>

//       {gameWon && <Greet />}

//       <div className="die-container">
//         {allDie.map((data) => (
//           <Die
//             key={data.id}
//             value={data.value}
//             isHeld={data.isHeld}
//             toggle={() => hold(data.id)}
//           />
//         ))}
//       </div>
//       <button
//         ref={BigInt64Array}
//         onClick={rollDie}
//         className="roll-btn"
//         id="roll-btn"
//       >
//         {gameWon ? "New Game" : "Roll"}
//       </button>
//     </main>
//   );
// }


import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(generateAllNewDice());
    }
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}