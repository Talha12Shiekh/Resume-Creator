import type { Breakpoint } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

type Direction = 'up' | 'down';

export default function useResponsiveness(breakpoint:Breakpoint,direction:Direction){
    const theme = useTheme();

    const query = direction === 'down'
    ? theme.breakpoints.down(breakpoint)
    : theme.breakpoints.up(breakpoint);

    const matches = useMediaQuery(query);


    return matches;
}