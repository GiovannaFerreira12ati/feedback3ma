import iconStar from "./assets/icon-star.svg"

export function App() {
  return (
  <div>
    <div>
      <img src={iconStar} alt="icon star" />
    </div>

    <h1>How didi we do?</h1>

    <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

    <div>
      <input type="button" value={1} />
      <input type="button" value={2} />
      <input type="button" value={3} />
      <input type="button" value={4} />
      <input type="button" value={5} />
    </div>

    <button>Submit</button>
  </div>
  )
}