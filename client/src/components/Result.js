import React, { PropTypes } from 'react'

const imgStyle = {
  margin: '0 auto',
  display: 'block'
};

const Result = ({ value, weather, image }) => (<div className="weather">
		<h2 className="text-center">The weather in {value} is {weather}* C</h2>
		<img src={image} width="100" height="100" style={imgStyle} role="presentation" />
	</div>
)

Result.propTypes = {
  value: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired
}

export default Result
