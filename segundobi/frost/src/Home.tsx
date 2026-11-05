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


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);
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
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            {/* <Button text="Cadastre-se" />  */}
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
        </>
    )
}