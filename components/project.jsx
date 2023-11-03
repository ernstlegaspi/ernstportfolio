'use client'

import Image from 'next/image'

import './components.css'

const Project = ({ onClick, img, alt }) => {
	return (
		<div onClick={onClick} className="project">
			<Image className="project-image" alt={alt} src={img} priority />
			<div className="overlay">
				<p>View project</p>
			</div>
		</div>
	)
}

export default Project
