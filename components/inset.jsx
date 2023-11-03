import { useTransition } from "react"

import { AiOutlineClose } from "react-icons/ai"

const Inset = ({ children, onClose }) => {
	const [_, startTransition] = useTransition()
	
	return (
		<div className="bg-black/50 inset-0 absolute z-20 flex justify-center">
			<div className="rounded bg w-[70%] h-max mt-[10%]">
				<div className="mx-2 my-2 hover:bg-gray-200 w-max rounded-full p-1 cursor-pointer close-button" onClick={() => startTransition(() => onClose(false))}>
					<AiOutlineClose />
				</div>
				{ children }
			</div>
		</div>
	)
}

export default Inset