export default function Password({ setIsAuthed }) {
  // function revealPage(){
  //     const onClick(e) => { // check syntax for writing onClick event functions
  //         // get the input text

  //         // match the input text against process.env.PASSWORD

  //         // if it matches, set the hook, else do nothing
  //         if (e.element.text==process.env.PASSWORD) {
  //             setIsAuthed(true);
  //         }
  //     };
  // }

  return (
    <div class="container">
      <div class="content about">
        <div class="password-text">
          <h2>Enter project password:</h2>
          <input type="password" name="password"></input>
        </div>
      </div>
    </div>
  )
}
