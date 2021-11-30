import './Refresh.css'

const Refresh = ({ onClick }) => {
    return (
        <div className="refresh-container">
        <p>Was Something changed?</p>
        <button className="refresh-button" onClick={onClick}>
            Refresh 🔃
        </button>
      </div>
    );
}



export default Refresh;