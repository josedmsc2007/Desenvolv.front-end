import Button from "./Button";

interface PricingCardProps {
    name: string;
    description: string;
    price: string;
    period?: string;
    buttonText: string;
    features: string[];
    featured?: boolean;
    badge?: string;
}

function Check() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="#45BEED" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

export default function PricingCard(props: PricingCardProps) {
    return (
        <div className={props.featured ? "pricing-card featured" : "pricing-card"}>
            {props.badge && <span className="badge">{props.badge}</span>}
            <div className="plan-info">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className="price">
                <strong>{props.price}</strong>
                {props.period && <span>{props.period}</span>}
            </div>
            <Button text={props.buttonText} secondary={!props.featured} />
            <hr />
            <ul>
                {props.features.map((feature) => (
                    <li key={feature}>
                        <Check />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
