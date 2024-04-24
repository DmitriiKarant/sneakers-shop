import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './InputDoubleRange.module.scss';

const InputDoubleRange = props => {
	let [minPrice, setMinPrice] = useState(0);
	let [maxPrice, setMaxPrice] = useState(500);

	// function dragStartHandler(e) {
	// 	console.log('1');
	// 	console.log(minPrice);
	// }
	//
	// function dragEndHandler(e) {
	// 	console.log('2');
	// }
	//
	// function dragOverHandler(e) {
	// 	e.preventDefault();
	// 	console.log('3');
	// }
	//
	// function dropHandler(e) {
	// 	e.preventDefault();
	// 	console.log('4');
	// }

	const sliderTrack = document.getElementById('1');
	const slider = document.getElementById('2');
	console.log(slider);

	slider.addEventListener('mousedown', e => {
		const shiftX = e.clientX - slider.getBoundingClientRect().left;

		onMouseMove(e);

		function moveAt(pageX) {
			console.log(pageX);
			const sliderLeftMax = sliderTrack.getBoundingClientRect().left;
			slider.style.transform = `translateX(${
				pageX - sliderLeftMax - shiftX
			}px)`;
		}

		function onMouseMove(event) {
			const sliderRightMax = sliderTrack.getBoundingClientRect().right;
			const sliderLeftMax = sliderTrack.getBoundingClientRect().left;
			const sliderPointRightPos = slider.getBoundingClientRect().right;
			const sliderPointLeftPos = slider.getBoundingClientRect().left;
			const movementOutRight =
				sliderPointRightPos -
					event.pageX -
					slider.offsetWidth +
					shiftX <
				0
					? true
					: false;

			const movementOutLeft =
				-sliderPointRightPos +
					event.pageX -
					slider.offsetWidth -
					shiftX <
				0
					? true
					: false;

			if (sliderPointRightPos >= sliderRightMax) {
				slider.style.transform = `translateX(${
					sliderTrack.offsetWidth - slider.offsetWidth
				}px)`;
				if (movementOutRight) {
				} else {
					moveAt(event.pageX);
				}
				return false;
			}

			if (sliderPointLeftPos <= sliderLeftMax) {
				slider.style.transform = `translateX(${0}px)`;
				if (movementOutLeft) {
					// console.log('Движение в левой части на левом краю слайдера');
				} else {
					// console.log('Движение в правой части на левом краю слайдера');
					moveAt(event.pageX);
				}

				return false;
			}
			moveAt(event.pageX);
		}
		document.addEventListener('mousemove', onMouseMove);
		removeMouseUp();

		function removeMouseUp() {
			document.onmouseup = function () {
				document.removeEventListener('mousemove', onMouseMove);
				document.onmouseup = null;
			};
		}
	});
	slider.ondragstart = function () {
		return false;
	};

	return (
		<div id={'1'} className={styles.sliderTrack}>
			<div
				id={'2'}
				// onDragStart={e => dragStartHandler(e, minPrice)}
				// onDragLeave={e => dragEndHandler(e)}
				// onDragEnd={e => dragEndHandler(e)}
				// onDragOver={e => dragOverHandler(e)}
				// onDrop={e => dropHandler(e)}
				className={styles.minSliderRange}
				draggable={true}
			></div>
			<div className={styles.maxSliderRange}></div>
		</div>
	);
};

InputDoubleRange.propTypes = {};

export default InputDoubleRange;
