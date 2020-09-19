import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'

import './styles.css'

const ExampleDisplay = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="square">
      <h2>This is a component</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis hic necessitatibus eos? Similique quod odio minima reiciendis illum molestiae sed consectetur voluptatibus, libero nesciunt, quas nulla nam, sunt labore.</p>
    </div>
  )

}

export default ExampleDisplay