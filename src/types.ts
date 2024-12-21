export interface PlayerInfo {
    id?: string;
    name: string;
    age: number;
    position: string;
    team: string;
}

export interface VideoAnalysisResult {
    id: string;
    playerId: string;
    timestamp: string;
    metrics: {
        speed: number;
        accuracy: number;
        possession: number;
        [key: string]: number;
    };
    highlights: string[];
}

export interface FormEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement;
}

export interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement;
}
