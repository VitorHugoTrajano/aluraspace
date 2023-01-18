import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Populares from "componentes/Populares";
import Rodape from "componentes/Rodape/Rodape";
import style from './Paginainicial.module.scss'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={style.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={style.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
} 