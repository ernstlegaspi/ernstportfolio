import { useState, useTransition } from 'react'

import twitterProject from '../img/twitterclone.webp'
import Project from './project'

const Projects = ({ setShowTwitterClone }) => {
	const [_, startTransition] = useTransition()
	
	return (
		<>
			<Project onClick={() => startTransition(() => setShowTwitterClone(true))} alt="Twitter Clone Project" img={twitterProject} />
		</>
	)
}

export default Projects