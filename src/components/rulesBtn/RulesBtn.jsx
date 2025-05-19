import './rulesBtn.css'

export default function RulesBtn({ afficheModal, setAfficheModal, affiche }) {
  return (
    <button className="rules-btn" onClick={affiche}>
      RULES
    </button>
  );
}
