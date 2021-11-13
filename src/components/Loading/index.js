import './Loading.css';
const Loading = ({ quantity = 3}) => {
    const renderLoading = () => {
        const skeletons = [];
        for (let item = 0; item < quantity; item++) {
            skeletons.push(<div className="loading-container">
                <span className="complete-icon">
                </span>
                <p className="text">Loading...</p>
                <span className="delete-icon">
                </span>
            </div>)
        }
        return skeletons;
    }
    return renderLoading();
}

export default Loading;