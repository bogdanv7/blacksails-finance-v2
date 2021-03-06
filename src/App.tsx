import React, { useCallback, useMemo, useState } from 'react'
import { createTheme, ThemeProvider } from 'react-neu'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { UseWalletProvider } from 'use-wallet'

import MobileMenu from 'components/MobileMenu'
import TopBar from 'components/TopBar'

import { BalancesProvider } from 'contexts/Balances'
import { FarmingProvider } from 'contexts/Farming'
import { FarmingProvider2 } from 'contexts/Farming2'
import { MigrationProvider } from 'contexts/Migration'
import { PricesProvider } from 'contexts/Prices'
import { VestingProvider } from 'contexts/Vesting'
import { GovernanceProvider } from 'contexts/Governance'
import YamProvider from 'contexts/YamProvider'

import useLocalStorage from 'hooks/useLocalStorage'

import Farm from 'views/Farm'
import Farm2 from 'views/Farm2'
import FAQ from 'views/FAQ'
import Home from 'views/Home'
import Migrate from 'views/Migrate'
import Governance from 'views/Governance'

const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])
  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    <Router>
      <Providers>
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/farm">
            <Farm />
          </Route>
          <Route exact path="/farm2">
            <Farm2 />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/migrate">
            <Migrate />
          </Route>
          <Route exact path="/governance">
            <Governance />
          </Route>
        </Switch>
      </Providers>
    </Router>
  )
}

const Providers: React.FC = ({ children }) => {
  const [darkModeSetting] = useLocalStorage('darkMode', false)
  const { dark: darkTheme, light: lightTheme } = useMemo(() => {
    return createTheme({
      //baseColor: { h: 338, s: 100, l: 41 },
	  baseColor: { h: 198, s: 0, l: 0 },
      //baseColorDark: { h: 339, s: 89, l: 49 },
	  baseColorDark: { h: 198, s: 8, l: 43 },
      borderRadius: 28,
    })
  }, [])
  return (
    <ThemeProvider
      darkModeEnabled={darkModeSetting}
      darkTheme={darkTheme}
      lightTheme={lightTheme}
    >
      <UseWalletProvider
        chainId={3}
        connectors={{
          walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
        }}
      >
        <YamProvider>
          <PricesProvider>
            <BalancesProvider>
              <FarmingProvider>
               <FarmingProvider2>
                <MigrationProvider>
                  <VestingProvider>
                    <GovernanceProvider>
                      {children}
                    </GovernanceProvider>
                  </VestingProvider>
                </MigrationProvider>
               </FarmingProvider2>
              </FarmingProvider>
            </BalancesProvider>
          </PricesProvider>
        </YamProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

export default App
