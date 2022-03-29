import { useMemo } from 'react'

import {
  yUsd as yUsdAddress,
  yamv3 as yamV3Address,
  yamv2 as yamV2Address,
} from 'constants/tokenAddresses'

import usePrices from 'hooks/usePrices'
import useTokenBalance from 'hooks/useTokenBalance'

const treasuryAddress = '0x1D1D35699C2a5d989e005e85721A254513B9295D'

const useTreasury = () => {
  const { yamTwap } = usePrices()
  const yamBalance = useTokenBalance(treasuryAddress, yamV3Address)
  const yamBalance2 = useTokenBalance(treasuryAddress, yamV2Address)
  const yUsdBalance = useTokenBalance(treasuryAddress, yUsdAddress)

  const totalYUsdValue = useMemo(() => {
    const yamYUsdValue = yamTwap && yamBalance ? yamTwap * yamBalance : 0
    return yUsdBalance ? yUsdBalance + yamYUsdValue : yamYUsdValue
  }, [
    yamBalance,
    yamBalance2,
    yamTwap,
    yUsdBalance,
  ])

  return {
    totalYUsdValue,
    yamBalance,
    yamBalance2,
    yUsdBalance,
  }
}

export default useTreasury