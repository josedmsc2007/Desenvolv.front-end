interface TestimonialCardProps {
    image: string;
    text: string;
    rating: number;
    name: string;
    role: string;
}

function Star({ filled }: { filled: boolean }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill={filled ? "#45BEED" : "none"} stroke="#45BEED" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

export default function TestimonialCard({ image, text, rating, name, role }: TestimonialCardProps) {
    return (
        <div className="carousel-card">
            <img src={image} alt={`Foto de ${name}`} />
            <div className="testimony">
                <p>{text}</p>
            </div>
            <span className="rating" role="img" aria-label={`Avaliação ${rating} de 5`}>
                {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} filled={i < rating} />
                ))}
            </span>
            <span className="names">
                <span className="bold">{name}</span>
                <span>{role}</span>
            </span>
        </div>
    );
}