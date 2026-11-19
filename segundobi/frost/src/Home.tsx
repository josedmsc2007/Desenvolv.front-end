import "./styles/header.css";
import "./styles/utility.css";
import Logo from "./assets/logo.svg";
import Close from "./assets/close.svg";
import Menu from "./assets/menu.svg";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import HeroRectangleOne from "./assets/images/Rectangle 13.png";
import HeroRectangleTwo from "./assets/images/Rectangle 14.png";
import "./styles/Hero.css";
import Card from "./components/Card";
import TruckIcon from "./assets/truck.svg";
import ToolIcon from "./assets/tool.svg";
import ChartIcon from "./assets/chart.svg";
import "./styles/Solution.css";
import TestimonialCard from "./components/TestimonialCard";
import AvatarML from "./assets/profiles/avatar-ml.svg";
import AvatarPA from "./assets/profiles/avatar-pa.svg";
import AvatarCS from "./assets/profiles/avatar-cs.svg";
import "./styles/Testimonials.css";
import PricingCard from "./components/PricingCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/Pricing.css";

const testimonials = [
    {
        image: AvatarML,
        name: "Marcos Lima",
        role: "Gestor de frota",
        rating: 5,
        text: "Antes eu anotava tudo em caderno. Agora sei quem pegou cada veículo, para qual obra e quando voltou.",
    },
    {
        image: AvatarPA,
        name: "Paulo Andrade",
        role: "Mestre de obras",
        rating: 4,
        text: "Registrar a saída e a devolução leva segundos. Acabou a discussão de quem estava com a caminhonete.",
    },
    {
        image: AvatarCS,
        name: "Carla Souza",
        role: "Engenheira de obra",
        rating: 5,
        text: "Os relatórios por obra me mostram o custo de combustível e manutenção sem precisar montar planilha.",
    },
];
// EXEMPLOS: ajuste planos, preços e benefícios com o cliente
const plans = [
    {
        name: "Básico",
        description: "Comece a organizar a frota hoje mesmo.",
        price: "Grátis",
        buttonText: "Começar agora",
        features: ["Até 5 veículos", "Controle de saída e devolução", "Relatórios simples"],
    },
    {
        name: "Profissional",
        description: "Para quem precisa de controle completo, sem limitações.",
        price: "R$ 49,90",
        period: "/mês",
        buttonText: "Experimente de graça",
        featured: true,
        badge: "1º mês grátis",
        features: ["Veículos ilimitados", "Abastecimento e manutenção", "Relatórios com filtros combináveis"],
    },
    {
        name: "Empresarial",
        description: "Para construtoras com várias obras e equipes.",
        price: "R$ 9,90",
        period: "/mês por veículo",
        buttonText: "Falar com a gente",
        features: ["Várias empresas e obras", "Perfis de administrador e motorista", "Suporte dedicado"],
    },
];

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    const cards = testimonials.map((t) => <TestimonialCard key={t.name} {...t} />);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Gestão Fácil" width={140} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center gap-1">
                            <span><Button text="Login" secondary /></span>
                            <span><Button text="Cadastre-se" /></span>
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>

            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Tela de controle de veículos do Gestão Fácil" />
                </span>
                <img src={HeroRectangleOne} alt="Tela de relatórios do Gestão Fácil" />

                <div className="container content">
                    <p className="desktop-only">Gestão Fácil</p>
                    <h1>Controle da sua frota de veículos, sem planilha e sem complicação.</h1>
                    <p>
                        Registre saída e devolução, abastecimento e manutenção de cada veículo
                        e acompanhe tudo por obra, motorista e relatório.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Solicitar demonstração" /></span>
                        <span className="desktop-only">
                            <Button text="Ver recursos" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Tudo o que sua frota precisa</h2>
                        </span>
                    </span>
                    <p>
                        A <strong>Gestão Fácil</strong> reúne o controle dos seus veículos em um só lugar,
                        para você saber onde cada um está, quem está usando e quanto custa manter.
                    </p>
                </header>

                <section className="even-columns">
                    <Card
                        icon={TruckIcon}
                        title="Saída e devolução"
                        text="Registre quem retirou o veículo, para qual obra e quando devolveu, sem anotar em papel."
                    />
                    <Card
                        icon={ToolIcon}
                        title="Abastecimento e manutenção"
                        text="Acompanhe cada abastecimento e manutenção e saiba o custo real de cada veículo."
                    />
                    <Card
                        icon={ChartIcon}
                        title="Relatórios"
                        text="Filtre por veículo, obra, motorista ou período e tenha os números na mão."
                    />
                </section>

            </section>
            <section id="testimonials">
                <header>
                    <span>
                        <span className="desktop-only">Conselho de quem conhece</span>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>Veja o que dizem as equipes que já organizaram a frota com a Gestão Fácil.</p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">{cards}</div>
                    <div className="carousel-content" aria-hidden="true">{cards}</div>
                </section>
            </section>
            <section className="container" id="pricing">
                <header>
                    <span>Planos e preços</span>
                    <h2>Nossos planos</h2>
                </header>
                <div className="even-columns">
                    {plans.map((plan) => (
                        <PricingCard key={plan.name} {...plan} />
                    ))}
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    )
}