import * as react from 'react';
import  { ThemeProvider as NextThemeProvider } from 'next-themes';


export function ThemeProvider({
    children,
    ...prop
}: React.ComponentProps<typeof NextThemeProvider>) {
    return <NextThemeProvider {...prop}>{children}</NextThemeProvider>;
}
