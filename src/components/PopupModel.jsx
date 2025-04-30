import './PopupModel.css';

function PopupModel({ show }) {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-message">
        The Form Has Been Submitted Successfully
      </div>
    </div>
  );
}

export default PopupModel;
