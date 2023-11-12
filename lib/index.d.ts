import React, { ReactNode } from "react";
export const Menu: React.ForwardRefExoticComponent<{
    hoverDelay?: number;
    children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export const MenuItem: React.ForwardRefExoticComponent<{
    onHover?: () => any;
    onLeave?: () => any;
    children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=index.d.ts.map
