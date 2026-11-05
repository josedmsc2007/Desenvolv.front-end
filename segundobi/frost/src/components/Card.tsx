type CardProps = {
    icon: string;
    title: string;
    text: string;
};

export default function Card({ icon, title, text }: CardProps) {
    return (
        <div className="card">
            <span>
                <img src={icon} alt="" width={64} height={64} />
            </span>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <hr />
            </div>
        </div>
    );
}