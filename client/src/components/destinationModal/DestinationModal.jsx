import './destinationModal.modules.css'

export default function DestinationModal({isOpen, onClose}) {
    if (!isOpen) return null

    return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>[Close]</span>
        <p>whatever</p>
      </div>
    </div>
    )
}
