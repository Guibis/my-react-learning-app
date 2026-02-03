export default function UserAvatar({ImageURL, size}) {
    return (
        <img src={ImageURL} alt="MK3eW3A" width={size} height={size} style={{borderRadius: "50%"}} />
    );
}
