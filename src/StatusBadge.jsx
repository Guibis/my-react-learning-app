export default function StatusBadge ({status}) {
    if (status === "online") {
        return (
            <span style={{backgroundColor: "green", color: "white", padding: "5px", borderRadius: "5px", border: "none"}}>Online</span>
        );
    } 
    if (status === "offline") {
        return (
            <span style={{backgroundColor: "red", color: "white", padding: "5px", borderRadius: "5px", border: "none"}}>Offline</span>
        );
    }
    if (status === "away") {
        return (
            <span style={{backgroundColor: "orange", color: "white", padding: "5px", borderRadius: "5px", border: "none"}}>Away</span>
        );
    }
}
