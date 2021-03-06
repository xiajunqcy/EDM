export interface TabProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    index?: number;
    disabled?: boolean;
    activeIndex?: number;
    // id?: string;
    // onChange?: (index: number) => void;
    // onChange?: (index: number) => void;
}

export interface TabsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    activeIndex?: number;
    centerMode?: boolean;
    scrollable?: boolean;
    position?: 'top' | 'right' | 'bottom' | 'left';
    // onChange?: (index: number) => void;
}
