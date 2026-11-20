import { useState } from "react";
import type { FormEvent } from "react";
import Button from "./Button";
import "../styles/Contact.css";

interface ContactData {
    email: string;
    message: string;
}

async function sendContactEmail(data: ContactData) {
    const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Erro ao enviar mensagem.");
    }
}

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (status === "sending") return;

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data: ContactData = {
            email: String(formData.get("email") ?? ""),
            message: String(formData.get("message") ?? ""),
        };

        setStatus("sending");

        try {
            await sendContactEmail(data);
            setStatus("sent");
            form.reset();
        } catch (error) {
            setErrorMessage(
                error instanceof Error ? error.message : "Erro ao enviar mensagem."
            );
            setStatus("error");
        }
    }

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

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Seu melhor e-mail" required />
                <textarea
                    name="message"
                    rows={3}
                    placeholder="Motivo do contato. Ex: Gostei do sistema, poderia me enviar um orçamento?"
                    required
                />
                <span className="submit">
                    <Button text={status === "sending" ? "Enviando..." : "Enviar"} />
                </span>
                {status === "sent" && (
                    <p role="status">Mensagem enviada! Em breve entraremos em contato.</p>
                )}
                {status === "error" && (
                    <p role="alert" className="error">
                        {errorMessage}
                    </p>
                )}
            </form>
        </section>
    );
}
