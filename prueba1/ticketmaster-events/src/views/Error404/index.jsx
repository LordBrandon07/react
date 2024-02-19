import styles from "./Error404.module.css"

import { useRouteError } from "react-router-dom"

const Error404 = () => {
    const error = useRouteError();
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>{error.status} Ops!</h3>
            <p className={styles.description}>Error caremonda</p>
            <p className={styles.description}>{error.data}</p>
            <img src="./goku.png" alt="" />
        </div>
    )
}

export default Error404