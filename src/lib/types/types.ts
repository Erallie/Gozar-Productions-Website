export enum SectionType {
    First = "first",
    White = "white",
    Video = "video",
    Image = "image"
}

export enum TextColor {
    White,
    Black
}

export type SectionProps = {
    id?: string;
    type: SectionType;
    textColor: TextColor;
    backgroundSource?: string;
    children: any;
}

export type ButtonProps = {
    link: string;
    customSVG?: boolean;
    children: any;
}

export type HeaderProps = {
    title: string;
    subtitle: string;
    pretitle?: string;
    children?: any;
}