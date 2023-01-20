export type championInfo = {
    name: string;
    tags: string[];
    partype: string;
    championImage: string;
    attackRange: number;
};

export interface IChampionRating {
    name: string;
    review: number[];
}

export interface IChampionAbilities {
    passive: string[]; //eks: ["name of ability", "ability description", "ability image"]
    q: Spell;
    w: Spell;
    e: Spell;
    r: Spell;
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export type Spell = {
    name: string;
    description: string;
    image: string;
};

export interface IAction {
    type: string
    payload: championInfo[]
}

export interface IChampionInfo {
    name: string;
    title: string;
    review: number[];
    lore: string;
    tags: string[];
    loadingScreenImage: string;
    attackRange: number;
    play: string[];
    playAgainst: string[];
}