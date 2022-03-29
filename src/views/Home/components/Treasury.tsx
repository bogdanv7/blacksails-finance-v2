import React from 'react'
import BSFLogo from '../../../assets/img/treasure.png'
import BSFCoin from '../../../assets/img/coin.png'
import BSFMap from '../../../assets/img/map.png'
import numeral from 'numeral'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardTitle,
  Spacer,
} from 'react-neu'

import FancyValue from 'components/FancyValue'
import Split from 'components/Split'

import useTreasury from 'hooks/useTreasury'

const Treasury: React.FC = () => {
  const { totalYUsdValue, yamBalance, yamBalance2 } = useTreasury()
  
  const treasuryValue = typeof totalYUsdValue !== 'undefined'
    ? '$'+numeral(totalYUsdValue * 1.15).format('0.00a')
    : '--'

  const yamValue = typeof yamBalance !== 'undefined'
    ? numeral(yamBalance).format('0.00a')
    : '--'

  const yamValue2 = typeof yamBalance2 !== 'undefined'
    ? numeral(yamBalance2).format('0.00a')
    : '--'

  return (
    <Card>
      <CardTitle text="Treasury Overview" />
      <Spacer size="sm" />
      <CardContent>
        <Split>
          <FancyValue
            icon={<img src={BSFLogo} height="60" style={{ marginTop: 0 }}/>}
            label="Treasury value"
            value={treasuryValue}
          />
          <FancyValue
            icon={<img src={BSFCoin} height="50" style={{ marginTop: 0 }}/>}
            label="GOLD in reserves"
            value={yamValue2}
          />
          <FancyValue
            icon={<img src={BSFMap} height="50" style={{ marginTop: 0 }}/>}
            label="MAPS in reserves"
            value={yamValue}
          />
        </Split>
        <Spacer />
      </CardContent>
      <CardActions>
        <Box row justifyContent="center">
          <Button
            href="https://etherscan.io/address/0xcf27ca116dd5c7b4201c75b46489d1c075362087"
            text="View on Etherscan"
            variant="secondary"
          />
        </Box>
      </CardActions>
    </Card>
  )
}

export default Treasury