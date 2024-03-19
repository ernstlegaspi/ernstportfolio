import { useState, useTransition } from 'react'

import Project from './project'
import ProjectWithLinks from './projectWithLinks'

import periodicTable from '../img/periodictable.webp'
import twitterProject from '../img/twitterclone.webp'

const Projects = ({ setShowTwitterClone }) => {
	const [_, startTransition] = useTransition()
	
	return (
		<div className='flex'>
			<Project onClick={() => startTransition(() => setShowTwitterClone(true))} alt="Twitter Clone Project" img={twitterProject} />
			<ProjectWithLinks link="https://ernstlegaspi-periodic-table.vercel.app/" alt="Periodic Table" img={periodicTable} />
		</div>
	)
}

export default Projects