type Props = {
    setOpen: () => void;
    isText?: boolean;
    className?: string;
    white?: boolean;
    msAuto?: boolean;
};

export const Burger = ({ setOpen, white, isText, className, msAuto }: Props) => {
    return (
        <button type="button" 
                onClick={setOpen} 
                className={`nav-toggle-btn ${white ? 'white' : ''} a-nav-toggle ${!msAuto ? 'ms-auto' : ''} ${className}`}>
            {isText && <span className="nav-toggle-title">Menu</span>}
            <span className="nav-toggle nav-toggle-sm">
                <span className="stick stick-1" />
                <span className="stick stick-2" />
                <span className="stick stick-3" />
            </span>
        </button>
    );
};
