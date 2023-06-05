import {Meta, StoryObj} from "@storybook/react";
import {Button} from "@/components/Button/Button";

/**
 * On commence par définir les metadata de notre story.
 * On peut metre pas mal de chose, mais on va surtout mettre le composant que l'on va utiliser.
 * Il faut penser à mettre un export default après les meta, c'est comme ça que Storybook sait
 * comment lire le fichier
 */
const meta: Meta<typeof Button> = {
    component: Button
}

export default meta;

/**
 * Le type de nos story (c'est surtout pour l'auto-completion). Comme ça on peut renseigner toutes les
 * props de notre composant.
 */
type Story = StoryObj<typeof Button>;

/**
 * Notre story principale, en fonction des écoles, elle est souvent appelée "Primary".
 * Il ne faut pas oublier de l'exporter.
 *
 * C'est un objet auquel on va donner un attribut args contenant les props à passer à notre composant.
 * L'idée de la story principale est d'illustrer le cas le plus courant du composant.
 * Ces valeurs peuvent être réutilisées après dans d'autres stories.
 */
export const Primary: Story = {
    args: {
        // Tout ce qui suit sera passé en props au composant
        children: "Hello World !",
        role: 'primary'
    }
}

/**
 * Ici, on souhaite montrer une autre variante du composant
 * Pour ce faire, on repart de notre story Default et on ne change que ce qui a besoin d'être modifié.
 * passé en prop.
 */
export const Secondary: Story = {
    // On commence par copier toute notre story Default
    ...Primary,
    // Par contre, on va changer la valeur de l'attribut `args`
    args: {
        // On copie une fois encore tous les args de Default
        ...Primary.args,
        role: 'secondary',
    }
}

export const Accent: Story = {
    ...Primary,
    args: {
        ...Primary.args,
        role: 'secondary',
    }
}

export const ShowCase: Story = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1em',
            color: '#fff'
        }}>
            <span>Primary</span>
            <Button role={'primary'}>Hello World</Button>
            <span>Secondary</span>
            <Button role={'secondary'}>Hello World</Button>
            <span>Accent</span>
            <Button role={'accent'}>Hello World</Button>
        </div>
    )
}