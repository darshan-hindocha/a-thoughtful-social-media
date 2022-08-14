import '../styles/globals.css';

import {ThemeProvider as Theme1} from 'next-themes';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
});


export default function App({Component, pageProps}) {
    return (
        <Theme1 attribute="class">
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Theme1>
    );
}