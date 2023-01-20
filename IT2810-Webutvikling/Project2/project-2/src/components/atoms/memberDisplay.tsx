import "../components-style/memberDisplay.css";

interface IMember {
    name: string;
    image: string;
    accessGranted: string;
}

//Component for displaying individual member information
export default function MemberDisplay({ name, image, accessGranted }: IMember) {
    return (
        <div id="memberBox">
            <img src={image} alt="profile" />
            <h1>{name}</h1>
            <p>
                <span id="bold">Access granted at:</span>{" "}
                <span id="accessGranted">{accessGranted}</span>
            </p>
        </div>
    );
}
