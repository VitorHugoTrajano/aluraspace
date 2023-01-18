import banner from './banner.png'
import styles from './Banner.module.scss'

export default function Banner() {
    return (
        <div className={styles.imagem}>
            <h1>A galeria mais completa do espaço!</h1>
            <img src={banner} alt="Planeta Terra visto do espaço"/>
        </div>
    )
}