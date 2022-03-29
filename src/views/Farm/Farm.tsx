import React, { useMemo } from 'react'

import {
  Box,
  Button,
  Container,
  Separator,
  Spacer,
} from 'react-neu'

import { useWallet } from 'use-wallet'

import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import Split from 'components/Split'

import useFarming from 'hooks/useFarming'

import HarvestCard from './components/Harvest'
import StakeCard from './components/Stake'

const Farm: React.FC = () => {
  const { status } = useWallet()
  const {
    isRedeeming,
    onRedeem,
  } = useFarming()

  const RedeemButton = useMemo(() => {
    if (status !== 'connected') {
      return (
        <Button
          disabled
          text="Harvest &amp; Unstake"
          variant="secondary"
        />
      )
    }
    if (!isRedeeming) {
      return (
        <Button
          onClick={onRedeem}
          text="Harvest &amp; Unstake"
          variant="secondary"
        />
      )
    }
    return (
      <Button
        disabled
        text="Redeeming..."
        variant="secondary"
      />
    )
  }, [
    isRedeeming,
    onRedeem,
  ])

  return (
    <Page>
      <PageHeader
        icon="🧑‍🌾"
        subtitle="Stake MAPS/ETH and Receive MAPS"
        title="Invest Wealth"
      />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="☠️Stake MAPS" to="/farm2" variant="secondary" />
      </div>
          <Spacer size="lg" />
      <Container>
        <Split>
          <StakeCard />
          <HarvestCard />
        </Split>
        <Spacer />
        <Box row justifyContent="center">
          {RedeemButton}
        </Box>
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />                
        <Split>
          <Button
            full
            text="Buy MAPS"
            href="https://app.uniswap.org/#/swap?inputCurrency=MAPTOKENADDRESS"
            variant="tertiary"
          />
          <Button
            full
            text="Get MAPS/ETH LP Tokens"
            href="https://app.uniswap.org/#/add/MAPSETHADDRESS"
            variant="tertiary"
          />
          <Button
            full
            text="Trade GOLD/MAPS"
            href="https://app.uniswap.org/#/swap?inputCurrency=MAP/GOLDPAIRADDRESS"
            variant="tertiary"
          />
        </Split>
      </Container>
    </Page>
  )
}

export default Farm