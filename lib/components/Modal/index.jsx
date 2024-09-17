import "./style.css"

export function Modal({modalText, onClose}) {

    return <>
    <div className="react-modal-container">
                <div className="react-modal-modal">
                    <p className="react-modal-text">{modalText}</p>
                    <button className="react-modal-cross" onClick={onClose}></button>
                </div>
    </div>
        </>
}