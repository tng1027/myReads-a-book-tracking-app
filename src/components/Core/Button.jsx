

export const RoundButton = ({ onClick, children }) => {
    return <button className="round-button" onClick={onClick}>{children}</button>
}

export const HyperlinkButton = ({ onClick, children }) => {
    return <button className="hyperlink-button" onClick={onClick}>{children}</button>
}