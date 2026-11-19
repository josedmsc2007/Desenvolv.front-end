import { useState } from "react";
import Button from "./Button";
import "../styles/Contact.css";

export default function Contact() {
    const [sent, setSent] = useState(false);

    return (
        <section className="container" id="contact">
            <header>
                <span>Envie sua dúvida</span>
                <h2>Entre em contato</h2>
                <p>
                    Quer conhecer o Gestão Fácil, pedir um orçamento ou tirar uma dúvida?
                    Escreva para a gente, estamos à disposição para responder.
                </p>
            </header>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    e.currentTarget.reset();
                }}
            >
                <input type="email" name="email" placeholder="Seu melhor e-mail" required />
                <textarea
                    name="message"
                    rows={3}
                    placeholder="Motivo do contato. Ex: Gostei do sistema, poderia me enviar um orçamento?"
                    required
                />
                <span className="submit">
                    <Button text="Enviar" />
                </span>
                {sent && <p role="status">Mensagem enviada! Em breve entraremos em contato.</p>}
            </form>
        </section>
    );
}
