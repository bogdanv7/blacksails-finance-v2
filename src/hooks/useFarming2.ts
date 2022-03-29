import { useContext } from 'react'

import { FarmingContext2 } from 'contexts/Farming2'

const useFarming2 = () => {
  return { ...useContext(FarmingContext2) }
}

export default useFarming2