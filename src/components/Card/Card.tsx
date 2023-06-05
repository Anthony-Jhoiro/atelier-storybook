import {FC} from "react";


import styles from "./Card.module.scss"
import Image from "next/image";

export type CardOrientation = 'horizontal' | 'vertical'

export type CardProps = {
    pictureUrl: string,
    title: string,
    text: string;
    actionText?: string;
    onAction?: () => void

    /**
     * default is vertical
     */
    orientation?: CardOrientation
}

/**
 * Usage :
 * ```tsx
 * <Card
 *    pictureUrl={'https://images.unsplash.com/photo-1506878206813-92402b8ded23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
 *    title={'I am a card'}
 *    text={'Sugar plum jujubes candy candy icing soufflé topping cotton candy. Cotton candy lollipop biscuit sweet cookie sweet jelly. Cake bonbon jelly muffin chocolate cake donut tiramisu sugar plum toffee.'}
 *    actionText={'Click me'}
 *    onAction={() => alert('You clicked me !')}
 *  />
 * ```
 */
export const Card: FC<CardProps> = ({pictureUrl, title, text, actionText, onAction, orientation = 'vertical'}) => (
    <article className={`${styles.card} ${styles[orientation]}`}>
        <div className={styles.image}>
            <Image src={pictureUrl} alt={`cover of ${title}`} fill={true} unoptimized/>
        </div>
        <div className={styles.content}>
            <h3>{title}</h3>
            <p>{text}</p>

            {actionText ? <button onClick={onAction}>{actionText}</button> : null}
        </div>
    </article>
)