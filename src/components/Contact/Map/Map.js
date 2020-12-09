function Map({ location, zoomLevel }) {

    return (
        <>
            <div className="map">
                <iframe
                    title="map"
                    width="100%"
                    height="100%"
                    frameBorder="0" style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&q=Space+Needle,Seattle+WA`} allowFullScreen>
                </iframe>
            </div>
        </>
    )
}

export default Map; 