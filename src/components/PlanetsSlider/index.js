import Slider from 'react-slick'

import {ContainerOne, Heading} from './styledComponents'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <ContainerOne>
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem each={each} key={each.id} />
        ))}
      </Slider>
    </ContainerOne>
  )
}

export default PlanetsSlider
