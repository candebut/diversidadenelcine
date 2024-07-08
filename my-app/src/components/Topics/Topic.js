const Topic = ({ title, subtitle, children }) => {
    return (
        <div className='topic-main-wrapper'>
            <div className='topic-title'>
                <h2>{title}</h2>
                {subtitle ? <h5>{subtitle}</h5> : null}
            </div>
            <div className='topic-text'>
                {children}
            </div>
        </div>
    )
}
export default Topic;