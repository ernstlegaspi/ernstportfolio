'use client'

import { lazy, Suspense, useState } from 'react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import Image from 'next/image'

import me from '../img/me.jpg'
import twitterProject from '../img/twitterclone.png'

import axios from '../img/axios.png'
import css from '../img/css.png'
import html from '../img/html.png'
import django from '../img/django.png'
import express from '../img/express.png'
import git from '../img/git.png'
import graphql from '../img/graphql.png'
import mongodb from '../img/mongodb.png'
import mongoose from '../img/mongoose.png'
import mysql from '../img/mysql.png'
import nextjs from '../img/next.png'
import nodejs from '../img/nodejs.png'
import prisma from '../img/prisma.png'
import python from '../img/python.png'
import reactjs from '../img/reactjs.png'
import reactquery from '../img/reactquery.png'
import redux from '../img/redux.png'
import tailwind from '../img/tailwind.png'
import typescript from '../img/typescript.png'
import zustand from '../img/zustand.webp'

import AMA from '../img/ama.png'
import dict from '../img/dict.png'
import tup from '../img/tup.png'

// const TwitterClone = lazy(() => import('./twitter-clone/twitter-clone'))

export default function Home() {
	const [showTwitterClone, setShowTwitterClone] = useState(false)

	const educationCard = (img, schoolName, schoolCourse, dateAttended) => <div className="flex flex-col items-center max-[850px]:mb-5">
		<Image className="school-image" src={img} width={100} height={100} />
		<p className="w-[80%] mx-auto">{schoolName}</p>
		<p className="school-course">{schoolCourse}</p>
		<p className="date">{dateAttended}</p>
	</div>
	
	return (
		<div className="max-width">
			<div className="main-bg">
				<div className="margin">
					<div className="header">
						<div className="header-intro">
							<p>HEY THERE!</p>
							<h1>I'm Ernst Legaspi</h1>
							<p>Good day, I am Ernst Legaspi. I have 3 years personal experience and 1 year of work experience in web development using different full stack technologies, I am eager to contribute my skills to your dynamic team and assist in developing cutting-edge applications.</p>
							<div className="flex items-center socials-color mt-1 max-[850px]:w-full max-[850px]:justify-center">
								<a href="https://www.linkedin.com/in/er
								nst-danielle-legaspi-259547170/" target="_blank" rel="noreferrer"><AiFillGithub size={20} /></a>
								<a href="https://github.com/ernstlegaspi" target="_blank" rel="noreferrer"><AiFillLinkedin size={20} /></a>
								<a href="mailto:legapsiernstdanielle@gmail.com"><HiMail size={24} /></a>
							</div>
						</div>
						<Image src={me} alt="Ernst Legaspi" width={200} height={200} />
					</div>
					<div className="projects">
						<h2>Recent Projects</h2>
						<div className="p-row">
							<div onClick={() => {}} className="project">
							{/* <div onClick={() => setShowTwitterClone(true)} className="project"> */}
								<Image className="project-image" alt="Twitter Clone Project" src={twitterProject} />
								<div className="overlay">
									<p>View project</p>
								</div>
							</div>
						</div>
					</div>
					<div className="stacks">
						<h2>Stacks I know</h2>
						<p className="s-sub-title">Programming Languages / Databases / Others</p>
						<div className="s-row">
							<div className="stack">
								<Image src={reactjs} width={20} height={20} />
								<p>React.js</p>
							</div>
							<div className="stack">
								<Image src={nodejs} width={25} height={25} />
								<p>Node.js</p>
							</div>
							<div className="stack">
								<Image src={express} width={20} height={20} />
								<p>Express.js</p>
							</div>
							<div className="stack">
								<Image src={nextjs} width={20} height={20} />
								<p>Next.js</p>
							</div>
						</div>
						<div className="s-row">
							<div className="stack">
								<Image src={mongodb} width={20} height={20} />
								<p>MongoDB</p>
							</div>
							<div className="stack">
								<Image src={mysql} width={40} height={20} />
								<p>MySQL</p>
							</div>
							<div className="stack">
								<Image src={python} width={15} height={15} />
								<p>Python</p>
							</div>
							<div className="stack">
								<Image src={django} width={15} height={15} />
								<p>Django</p>
							</div>
						</div>
						<div className="s-row">
							<div className="stack">
								<Image src={reactquery} width={15} height={15} />
								<p>React Query</p>
							</div>
							<div className="stack">
								<Image src={zustand} width={50} height={20} />
								<p>Zustand</p>
							</div>
							<div className="stack">
								<Image src={axios} width={20} height={20} />
								<p>Axios</p>
							</div>
							<div className="stack">
								<Image src={redux} width={20} height={20} />
								<p>Redux</p>
							</div>
						</div>
						<div className="s-row">
							<div className="stack">
								<Image src={html} width={15} height={15} />
								<p>HTML</p>
							</div>
							<div className="stack">
								<Image src={css} width={20} height={20} />
								<p>CSS</p>
							</div>
							<div className="stack">
								<Image src={tailwind} width={30} height={15} />
								<p>TailwindCSS</p>
							</div>
							<div className="stack">
								<Image src={typescript} width={15} height={15} />
								<p>Typescript</p>
							</div>
						</div>
						<div className="s-row">
							<div className="stack">
								<Image src={graphql} width={15} height={15} />
								<p>GraphQL</p>
							</div>
							<div className="stack">
								<Image src={prisma} width={20} height={20} />
								<p>Prisma</p>
							</div>
							<div className="stack">
								<Image src={mongoose} width={50} height={20} />
								<p>Mongoose</p>
							</div>
							<div className="stack">
								<Image src={git} width={15} height={15} />
								<p>Git</p>
							</div>
						</div>
					</div>
					<div className="education">
						<h2>Education</h2>
						<div className="flex justify-center items-center text-center max-[850px]:flex-col">
							{educationCard(tup, "Technological University of the Philippines", "Bachelor of Science in Computer Science", "2019 - 2023")}
							{educationCard(dict, "Department of Information and Communications Technology – Philippines", "Software Engineering", "2018 - 2018")}
							{educationCard(AMA, "AMA Computer College", "Computer Programming", "2016 - 2018")}
						</div>
					</div>
				</div>
				{/* <Suspense fallback={<p>Loading...</p>}>
					{showTwitterClone ? <TwitterClone showTwitterClone={setShowTwitterClone} /> : null}
				</Suspense> */}
			</div>
		</div>
	)
}
