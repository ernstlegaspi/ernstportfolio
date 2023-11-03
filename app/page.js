'use client'

import { lazy, Suspense, useState } from 'react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import Image from 'next/image'

import me from '../img/me.webp'
import twitterProject from '../img/twitterclone.webp'

import axios from '../img/axios.webp'
import css from '../img/css.webp'
import django from '../img/django.webp'
import express from '../img/express.webp'
import git from '../img/git.webp'
import graphql from '../img/graphql.webp'
import html from '../img/html.webp'
import mongodb from '../img/mongodb.webp'
import mongoose from '../img/mongoose.webp'
import mysql from '../img/mysql.webp'
import nextjs from '../img/next.webp'
import nodejs from '../img/nodejs.webp'
import prisma from '../img/prisma.webp'
import python from '../img/python.webp'
import reactjs from '../img/reactjs.webp'
import reactquery from '../img/reactquery.webp'
import redux from '../img/redux.webp'
import tailwind from '../img/tailwind.webp'
import typescript from '../img/typescript.webp'
import zustand from '../img/zustand.webp'

import AMA from '../img/ama.webp'
import dict from '../img/dict.webp'
import tup from '../img/tup.webp'

// const TwitterClone = lazy(() => import('./twitter-clone/twitter-clone'))

export default function Home() {
	const [showTwitterClone, setShowTwitterClone] = useState(false)

	const Stack = ({ children }) => <div className="flex justify-center mb-3 max-[850px]:flex-col max-[850px]:items-center max-[850px]:mb-0">
		{children}
	</div>
	
	const Skills = ({ img, width = 20, height = 20, text, isSize15, alt }) => <div className="py-1 mr-3 orange-border rounded-full flex justify-center items-center w-[170px] px-[10px] max-[850px]:mb-5">
		<Image alt={alt} src={img} width={isSize15 ? 15 : width} height={isSize15 ? 15 : height} />
		<p className="ml-1">{text}</p>
	</div>
	
	const educationCard = (img, schoolName, schoolCourse, dateAttended, alt) => <div className="flex flex-col items-center max-[850px]:mb-5">
		<Image alt={alt} className="orange-border school-image" src={img} width={100} height={100} />
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
								nst-danielle-legaspi-259547170/" target="_blank" rel="noreferrer"><AiFillGithub className="text-[20px] max-[850px]:text-[40px]" /></a>
								<a href="https://github.com/ernstlegaspi" target="_blank" rel="noreferrer"><AiFillLinkedin className="text-[20px] max-[850px]:text-[40px]" /></a>
								<a href="mailto:legapsiernstdanielle@gmail.com"><HiMail className="text-[25px] max-[850px]:text-[45px]" /></a>
							</div>
						</div>
						<Image src={me} alt="Ernst Legaspi" className="me" />
					</div>
					<div className="projects">
						<h2>Recent Projects</h2>
						<div className="p-row">
							<div onClick={() => {}} className="project">
							{/* <div onClick={() => setShowTwitterClone(true)} className="project"> */}
								<Image className="project-image" alt="Twitter Clone Project" src={twitterProject} priority />
								<div className="overlay">
									<p>View project</p>
								</div>
							</div>
						</div>
					</div>
					<div className="stacks">
						<h2>Stacks I know</h2>
						<p className="s-sub-title">Programming Languages / Databases / Others</p>
						<Stack>
							<Skills alt="React.js Icon" img={reactjs} text="React.js" />
							<Skills alt="Node.js Icon" img={nodejs} text="Node.js" width={25} height={25} />
							<Skills alt="Express.js Icon" img={express} text="Express.js" />
							<Skills alt="Next.js Icon" img={nextjs} text="Next.js" />
						</Stack>
						<Stack>
							<Skills alt="MongoDB Icon" img={mongodb} text="MongoDB" />
							<Skills alt="MySQL Icon" img={mysql} text="MySQL" width={40} />
							<Skills alt="Python Icon" img={python} text="Python" isSize15 />
							<Skills alt="Django Icon" img={django} text="Django" isSize15 />
						</Stack>
						<Stack>
							<Skills alt="React Query Icon" img={reactquery} text="React Query" isSize15 />
							<Skills alt="Zustand Icon" img={zustand} text="Zustand" width={50} />
							<Skills alt="Axios Icon" img={axios} text="Axios" />
							<Skills alt="Redux Icon" img={redux} text="Redux" />
						</Stack>
						<Stack>
							<Skills alt="HTML Icon" img={html} text="HTML" isSize15 />
							<Skills alt="CSS Icon" img={css} text="CSS" />
							<Skills alt="TailwindCSS Icon" img={tailwind} text="TailwindCSS" width={30} height={15} />
							<Skills alt="Typescript Icon" img={typescript} text="Typescript" isSize15 />
						</Stack>
						<Stack>
							<Skills alt="GraphQL Icon" img={graphql} text="GraphQL" isSize15 />
							<Skills alt="Prisma Icon" img={prisma} text="Prisma" />
							<Skills alt="Mongoose Icon" img={mongoose} text="Mongoose" width={50} />
							<Skills alt="Git Icon" img={git} text="Git" isSize15 />
						</Stack>
					</div>
					<div className="education">
						<h2>Education</h2>
						<div className="flex justify-center items-center text-center max-[850px]:flex-col">
							{educationCard(tup, "Technological University of the Philippines", "Bachelor of Science in Computer Science", "2019 - 2023", "TUP")}
							{educationCard(dict, "Department of Information and Communications Technology – Philippines", "Software Engineering", "2018 - 2018", "DICT")}
							{educationCard(AMA, "AMA Computer College", "Computer Programming", "2016 - 2018", "AMA Computer College")}
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
