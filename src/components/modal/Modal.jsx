import './modal.css';
import rulesImg from '../../assets/image-rules.svg';

export default function Modal({ affiche }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      affiche();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={affiche}>✖</button>
        <h2>Rules</h2>
        <img src={rulesImg} alt="Rules" />
      </div>
    </div>
  );
}
