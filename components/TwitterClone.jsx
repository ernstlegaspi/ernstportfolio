import Inset from "./inset"

import twitterProject from '../img/twitterclone.webp'
import Image from "next/image"

import axios from '../img/axios.webp'
import express from '../img/express.webp'
import git from '../img/git.webp'
import mongodb from '../img/mongodb.webp'
import mongoose from '../img/mongoose.webp'
import nodejs from '../img/nodejs.webp'
import reactjs from '../img/reactjs.webp'
import redux from '../img/redux.webp'

const TwitterClone = ({ setShowTwitterClone }) => {
	const Skill = ({ src, width = 20, height = 20, alt }) => <Image className="mr-2" width={width} height={height} src={src} alt={alt} />
	
	return (
		<Inset onClose={setShowTwitterClone}>
			<Image className="w-full h-[500px]" src={twitterProject} alt="My Twitter Project" />
			<p className="w-full text-center mt-2 font-bold">Twitter Clone</p>
			<div className="w-full text-center mb-2 flex items-center justify-center">
				<a className="text-[10px] underline" href="https://github.com/ernstlegaspi/Twitter-Clone" target="_blank" rel="noreferrer">Twitter Clone Github</a>
				<a className="ml-3 text-[10px] underline" href="https://drive.google.com/file/d/1h3X4G28CRfN3wuOTdW3in-I0_5BKgKSM/view?usp=sharing" target="_blank" rel="noreferrer">Twitter Clone Video Demo</a>
			</div>
			<div className="flex w-full justify-center max-sm:flex-col max-sm:items-center">
				<Skill width={25} src={mongodb} alt="MongoDB" />
				<Skill src={express} alt="Express.js" />
				<Skill src={reactjs} alt="React.js" />
				<Skill width={25} height={25} src={nodejs} alt="Node.js" />
				<Skill src={redux} alt="Redux" />
				<Skill width={50} src={mongoose} alt="Mongoose" />
				<Skill src={axios} alt="Axios" />
				<Skill src={git} alt="Git" />
			</div>
			<div className="text-gray-700 text-[10px] my-2 ml-2">
				<p>This project is a Twitter Clone. This is the first big project that I have completed using MERN Stack Technology.</p>
				<div className="ml-3 text-[9px]">
					<p>1. MongoDB for my database</p>
					<p>2. Mongoose for the connection to MongoDB from Node.js</p>
					<p>3. Node.js for my Back-End</p>
					<p>4. Express.js for my RESTful APIs</p>
					<p>5. React.js for my Front-End</p>
					<p>6. Redux to handle all the states in the frontend</p>
					<p>7. Axios to handle the requests that the user will make to the server</p>
					<p>8. Git for my version control</p>
				</div>
				<p className="mt-2">I copied the main design of Twitter and some of the features of Twitter. Theses features are: </p>
				<div className="ml-3 text-[9px]">
					<p>1. Creating Account</p>
					<p>2. Creating Account using Google</p>
					<p>3. Posting a Tweet</p>
					<p>4. Liking a Tweet</p>
					<p>5. Showing the like count of the Tweet</p>
					<p>6. Commenting on a Tweet</p>
					<p>7. Showing the comment count of the Tweet</p>
					<p>8. Bookmarking a Tweet</p>
					<p>9. Show all the liked tweet that the user liked</p>
					<p>10. Show all the tweets</p>
					<p>11. Show all the tweet per user`</p>
					<p>12. Live Messaging</p>
					<p>13. Has live notifications</p>
					<p>14. Can go to a single page tweet</p>
					<p>15. Show all the comments on a single tweet</p>
				</div>
			</div>
		</Inset>
	)
}

export default TwitterClone