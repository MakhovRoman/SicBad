type TitleType = 'h1' | 'h2' | 'h3' | 'h4';

export type TitleProps = {
    title: string,
    type: TitleType,
    fontSize?: number,
    isDivider?: boolean
}
