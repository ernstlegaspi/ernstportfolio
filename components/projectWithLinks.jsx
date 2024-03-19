'use client'

import Link from 'next/link'

import Image from 'next/image'

import './components.css'

const ProjectWithLinks = ({ link, img, alt }) => {
	return <div className="project mr-3">
		<Link href={link}>
			<Image className="project-image" alt={alt} src={img} priority />
			<div className="overlay">
				<p>View project</p>
			</div>
		</Link>
	</div>
}

export default ProjectWithLinks
