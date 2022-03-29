import React, { useMemo } from 'react'

import {
  Card,
  CardContent,
  Container,
  Spacer,
} from 'react-neu'
import { useLocation } from 'react-router-dom'

import ExternalLink from 'components/ExternalLink'
import Page from 'components/Page'
import PageHeader from 'components/PageHeader'

import Question from './components/Question'

const FAQ: React.FC = () => {
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')

  const activeSlug = useMemo(() => {
    if (pathArr.length > 2) {
      return pathArr[2]
    }
  }, [pathArr])

  return (
    <Page>
      <PageHeader
        icon="📖"
        subtitle="Learn about BSF"
        title="FAQ"
      />
      <Container>
        <Card>
          <CardContent>
            <Question
              active={activeSlug === "yam-protocol"}
              question="What is the Blacksails Finance?"
              slug="yam-protocol"
            >
              <span>BSF is a decentralized cryptocurrency controlled solely by the community.</span>
            </Question>
            <Question
              active={activeSlug === "farming"}
              question="Can I farm MAPS?"
              slug="farming"
            >
              <span>Yes. Currently, you’re able to earn MAPS rewards by providing liquidity to the <ExternalLink href="https://uniswap.info/pair/">MAPS/ETH Uniswap pool</ExternalLink></span>
            </Question>
            <Question
              active={activeSlug === "yusd"}
              question="What is GOLD?"
              slug="yusd"
            >
              <span>Gold is our Secondary token which you are able to receive from staking your maps, GOLD and MAPS Uni Pair has been created for you to turn your GOLD back into MAPS</span>
            </Question>
          </CardContent>
        </Card>
      </Container>
    </Page>
  )
}


export default FAQ