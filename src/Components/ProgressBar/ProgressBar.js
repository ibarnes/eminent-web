import React, { useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import anime from 'animejs/lib/anime.es.js';
import { setProgress } from '../../store/actions/actionCreator';
import { BREAKPOINTS, screens } from '../../constants/constants';
import { ReactComponent as ActiveProgressSVG1 } from '../../assets/images/progress_active1.svg';
import { ReactComponent as ActiveProgressSVG2 } from '../../assets/images/progress_active2.svg';
import { ReactComponent as ProgressEllipse } from '../../assets/images/ellipse_progressbar.svg';
import { getFadeOutFormTen, getFadeOutProgressSvg } from "../../helpers/animations";
import { getNextStepFromForm, getStandardNextStep } from "../../helpers/next_step";

export default () => {
    const dispatch = useDispatch();
    const {
        currentStep
    } = useSelector(state => state.state);
    const _root = React.useRef(null)

    useEffect(() => {
        dispatch(setProgress(currentStep))
        screens.forEach(i => i.active = false)
        screens[currentStep].active = true
    }, [currentStep, _root])

    const progressHoverIn = (e) => {
        const box = e.target.classList.contains('progressBtn') ? e.target : e.target.parentElement;

        if (box.classList.contains('over') || window.innerWidth <= BREAKPOINTS.tablet) return;

        const border = box.querySelector('.progressBorder');
        if (!border) return;

        box.classList.add('over');

        window.animation_t2 = anime.timeline().add({
            targets: border,
            strokeDashoffset: [24, 0],
            duration: 500,
            easing: 'linear'
        })
    }

    const progressHoverOut = (e) => {
        const box = e.target.classList.contains('progressBtn') ? e.target : e.target.parentElement;

        if (window.innerWidth <= BREAKPOINTS.tablet) return;

        const border = box.querySelector('.progressBorder');
        if (!border) return;

        box.classList.remove('over');

        window.animation_t2 = anime.timeline().add({
            targets: border,
            strokeDashoffset: [0, 24],
            duration: 500,
            easing: 'linear'
        })
    }

    const getNextStep = (nextStep) => {
        if (nextStep === currentStep) return;

        if (window.animation && !window.animation.completed) {
            return;
        }
        switch (currentStep) {
            case 12:
                {
                    const progressSvgArray = document.querySelectorAll(`.styledProgress_${currentStep}`);
                    getNextStepFromForm(nextStep, currentStep, progressSvgArray);
                    return;
                }
            default:
                {
                    window.animation.way = 'back';
                    screens[currentStep].isFooterShow && getFadeOutFormTen('.footer', 0, () => null);
                    const progressSvgArray = document.querySelectorAll(`.styledProgress_${currentStep}`);
                    const progressBorderDefault = document.querySelector(`.progressBorderDefault__${currentStep}`);
                    getFadeOutProgressSvg([...progressSvgArray, progressBorderDefault], () => {})
                    getStandardNextStep(nextStep);
                }
        }
    }

    const progressClickHandler = (e) => {
        const stepId = e.target.dataset.id ? e.target.dataset.id : e.target.parentElement.dataset.id;
        if (!stepId) return;
        getNextStep(Number(stepId));
    }

    return ( <
        ProgressBar className = "progressBar"
        ref = {
            _root
        }
        $step = {
            currentStep
        }
        $numSteps = {
            screens.length
        } > {
            screens.map((item, index) =>
                <
                ProgressBtn className = "progressBtn"
                key = {
                    item.id
                }
                onMouseOver = {
                    progressHoverIn
                }
                onMouseLeave = {
                    progressHoverOut
                }
                onClick = {
                    progressClickHandler
                }
                data-id = {
                    item.id
                } >
                <
                ProgressBorderDefault className = {
                    `progressBorderDefault__${index}`
                }
                $borderColor = {
                    screens[currentStep].progressBorder
                }
                $active = {
                    item.active
                }
                $color = {
                    screens[currentStep].textColor
                }
                /> <
                ProgressBorderDefault2 $borderColor = {
                    screens[currentStep].progressBorder
                }
                $active = {
                    item.active
                }
                $color = {
                    screens[currentStep].textColor
                }
                /> <
                ProgressBorder className = "progressBorder"
                $active = {
                    item.active
                }
                $color = {
                    screens[currentStep].textColor
                }
                /> <
                StyledProgress1 className = {
                    `styledProgress_${index}`
                }
                $active = {
                    item.active
                }
                $color = {
                    screens[currentStep].textColor
                }
                /> <
                StyledProgress2 className = {
                    `styledProgress_${index}`
                }
                $active = {
                    item.active
                }
                $color = {
                    screens[currentStep].textColor
                }
                /> < /
                ProgressBtn > )
        } <
        /ProgressBar>
    )
}

const block1_progress_animation = keyframes `
	0%   {transform: skew(-30deg) rotate(1deg)}
	50%  {transform: skew(30deg) rotate(180deg)}
	100% {transform: skew(-30deg) rotate(360deg)}
`

const ProgressBar = styled.div `
	opacity: 1;
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	left: 1%;
	color: #fff;
	padding: 14px;
	display: grid;
	grid-template-rows: repeat(${({$numSteps}) => $numSteps}, 35px);
	place-items: center center;
	transition: 0.3s ease;

	@media(max-width:${BREAKPOINTS.tablet}px) {
		top: auto;
		transform: translateY(0);
		padding: 0;
		margin: 0;
		bottom: 15px; 
		//this change scrollbars left position to center of active button
		left: ${({$step}) => $step === 0 ?
			`
calc(50 % -25 px)
` : `
calc(50 % -25 px - $ {
        $step * 35
    }
    px)
`};
		width: 500px;
		height: 50px;
		grid-template-rows: none;
		grid-template-columns: repeat(${({$numSteps}) => $numSteps}, 35px);
		transition: 0.3s ease;
		z-index: 5;
	}
`
const ProgressBtn = styled.div `
	position: relative;
	width: 25px;
	height: 25px;
	cursor: pointer;
	opacity: 1;
	transition: all 0.3s;
	z-index: 1;

	@media(max-width:${BREAKPOINTS.tablet}px) {
		//safari outline fix
		-webkit-tap-highlight-color: transparent;
	}
	
	
`
const ProgressBorder = styled(ProgressEllipse)
`
	content: '';
	display: ${({$active}) => $active ? 'none' : 'block'};
	position: absolute;
	left: 6px;
	top: 6px;
	width: 12px;
	height: 12px;
	stroke: ${({$color}) => $color };
	opacity: 1;
	stroke-dashoffset: 24;
	stroke-dasharray: 24;
`
const ProgressBorderDefault = styled(ProgressEllipse)
`
	content: '';
	display: block;
	position: absolute;
	left: 6px;
	top: 6px;
	width: 12px;
	height: 12px;
	stroke: ${({$active, $borderColor}) => $active ? 'transparent' : $borderColor};
	fill: ${({$active, $color}) => $active ? $color : `
transparent `};
	opacity: 1;
	stroke-dashoffset: 0;
	stroke-dasharray: 24;
`
const ProgressBorderDefault2 = styled(ProgressEllipse)
`
	content: '';
	display: block;
	position: absolute;
	left: 6px;
	top: 6px;
	width: 12px;
	height: 12px;
	stroke: ${({$active, $borderColor, $color}) => $active ? $color : $borderColor};
	fill: none;
	opacity: 1;
	stroke-dashoffset: 0;
	stroke-dasharray: 24;
`
const StyledProgress1 = styled(ActiveProgressSVG1)
`
	content: '';
	display: ${({$active}) => $active ? 'inline-block': 'none'} ;
	position: absolute;
	left: -7px;
	top: -7px;
	width: 38px;
	height: 38px;
	stroke:${({$color}) => $color };
	border: none;
	stroke-width:1px;
	animation: ${block1_progress_animation} infinite 10s ease;
	animation-direction: reverse;
	opacity: ${({$active}) => $active ? 1 : 0};
	transition: all 1s;
`
const StyledProgress2 = styled(ActiveProgressSVG2)
`
	content: '';
	display: ${({$active}) => $active ? 'inline-block': 'none'} ;
	position: absolute;
	left: -9px;
	top: -9px;
	width: 43px;
	height: 43px;
	stroke:${({$color}) => $color };
	border: none;
	stroke-width:1px;
	animation: ${block1_progress_animation} infinite 10s ease;
	animation-direction: normal;
	opacity: ${({$active}) => $active ? 1 : 0};
	transition: all 1s;
`