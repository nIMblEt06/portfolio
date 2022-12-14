import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import gsap, { Power4 } from 'gsap';
import { BsLock } from 'react-icons/bs';

function Loader(props) {
	let loader = useRef(null)
	let word1 = useRef(null)
	let word2 = useRef(null)
	let word3 = useRef(null)
	let word4 = useRef(null)
	let word5 = useRef(null)
	let word6 = useRef(null)
	let word7 = useRef(null)
	let word8 = useRef(null)
	let word9 = useRef(null)
	const { isLoaded } = props;
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (sessionStorage.getItem('hasLoaded')) {
			setTimeout(() => {
				loader.style.transform = "translateY(-100%)"
			}, 2000);
		}
	})

	useEffect(() => {
		if (isLoaded) {
			setTimeout(() => {
				loader.style.transform = "translateY(-100%)"
			}, 3000);
		}

	}, [isLoaded])

	//GSAP code for animations

	const showText = (node1, node2, node3, node4, node5, node6, node7, node8, node9) => {
		gsap.to([node1, node2, node3, node4, node5, node6, node7, node8, node9], {
			duration: 0.3,
			opacity: 1,
			y: 0,
			display: "block",
			stagger: { amount: 6 },
			ease: Power4.easeInOut,
		});
	};
	const removeText = (node1, node2, node3, node4, node5, node6, node7, node8, node9) => {
		gsap.to([node1, node2, node3, node4, node5, node6, node7, node8, node9], {
			duration: 0.3,
			opacity: 0,
			y: 40,
			delay: 0.3,
			display: "none",
			stagger: { amount: 6 },
			ease: Power4.easeInOut,
		});
	};
	useEffect(() => {
		// setInterval(() => {
			showText(word1, word2, word3, word4, word5, word6, word7, word8, word9)
			removeText(word1, word2, word3, word4, word5, word6, word7, word8, word9)
			setTimeout(() => {
				setCount(count => count+1)
			}, 7000);
		// }, 9);
	}, [count])

	return (
		<Flex ref={el => loader = el} className="loaderWrapper">
			<Box className='word' ref={el => word1 = el}>Hello</Box>
			<Box className='word' ref={el => word2 = el}>Bonjour</Box>
			<Box className='word' ref={el => word3 = el}>स्वागत हे</Box>
			<Box className='word' ref={el => word4 = el}>Ciao</Box>
			<Box className='word' ref={el => word5 = el}>Olá</Box>
			<Box className='word' ref={el => word6 = el}>おい</Box>
			<Box className='word' ref={el => word7 = el}>Hallå</Box>
			<Box className='word' ref={el => word8 = el}>Guten tag</Box>
			<Box className='word' ref={el => word9 = el}>Hallo</Box>

		</Flex>
	)
}

export default Loader