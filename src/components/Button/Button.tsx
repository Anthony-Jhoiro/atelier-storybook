import {ComponentPropsWithoutRef, forwardRef} from "react";

import styles from "./Button.module.scss"

export type ButtonRole = 'primary' | 'secondary' | "accent"


export type ButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'className'> & {
    role: ButtonRole
};



export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({children, role, ...props}, ref) => (
        <button
            ref={ref}
            {...props}
            className={`${styles.btn} ${styles[role]}`}
        >{children}
        </button>
    )
);