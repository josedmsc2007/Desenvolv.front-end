import "../styles/buttons.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;

}
export default function Button(props: IButtonProps) {
    return (
        <button className={props.secondary ? "btn-secondary" : "btn-primary"}>
            {props.text}
        </button>
    )
}