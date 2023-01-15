/* eslint-disable react/jsx-no-constructed-context-values */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppClient } from './clients';
import { Layout } from './components/Layout';
import { PageDefault } from './components/PageDefault';
import { routes } from './config';
import { AppContext } from './contexts/app-context';
import { ThemeModeContext } from './contexts/theme-mode-context';
import { getAppTheme } from './styles/theme';
import { Route as AppRoute } from './types/route';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(
    DARK_MODE_THEME,
  );
  const appClient = new AppClient();

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    [],
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const addRoute = (route: AppRoute) => (
    <Route key={route.key} path={route.path} element={route.component || PageDefault} />
  );

  return (
    <AppContext.Provider value={appClient}>
      <ThemeModeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Layout>
                {routes.map((route: AppRoute) =>
                  route.subRoutes
                    ? route.subRoutes.map((item: AppRoute) => addRoute(item))
                    : addRoute(route),
                )}
              </Layout>
            </Switch>
          </Router>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
