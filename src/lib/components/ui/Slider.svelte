<script>
	let { orientation = 'landscape', current = $bindable(0), min = 0, max = 100 } = $props();

	let trackEl = $state();
	const percent = $derived(((current - min) / (max - min)) * 100);
	const clampedPercent = $derived(Math.min(100, Math.max(0, percent)));

	function updateFromEvent(e) {
		if (!trackEl) return;

		const rect = trackEl.getBoundingClientRect();
		const isVertical = orientation === 'portrait';
		const clientCoord = isVertical
			? (e.clientY ?? e.touches?.[0]?.clientY)
			: (e.clientX ?? e.touches?.[0]?.clientX);

		const offset = isVertical ? rect.top : rect.left;
		const size = isVertical ? rect.height : rect.width;

		let ratio = (clientCoord - offset) / size;

		if (isVertical) ratio = 1 - ratio;

		const nextValue = Math.min(max, Math.max(min, min + ratio * (max - min)));
		current = nextValue;
	}

	function startDrag(e) {
		updateFromEvent(e);

		const onMove = (ev) => updateFromEvent(ev);
		const onStop = () => {
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('touchmove', onMove);
			window.removeEventListener('mouseup', onStop);
			window.removeEventListener('touchend', onStop);
		};

		window.addEventListener('mousemove', onMove);
		window.addEventListener('touchmove', onMove, { passive: false });
		window.addEventListener('mouseup', onStop);
		window.addEventListener('touchend', onStop);
	}

	function setupTouch(node) {
		const handleTouch = (e) => {
			e.preventDefault();
			startDrag(e);
		};

		node.addEventListener('touchstart', handleTouch, { passive: false });

		return {
			destroy() {
				node.removeEventListener('touchstart', handleTouch);
			}
		};
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="slider-track-path"
	use:setupTouch
	bind:this={trackEl}
	onmousedown={startDrag}
	class:vertical={orientation === 'portrait'}
>
	<div
		class="slider-track-filled"
		style="--percent: {clampedPercent}%"
		class:vertical={orientation === 'portrait'}
	></div>

	<button
		class="slider-thumb"
		class:vertical={orientation === 'portrait'}
		style:left={orientation === 'landscape' ? `${clampedPercent}%` : '50%'}
		style:bottom={orientation === 'portrait' ? `${clampedPercent}%` : '50%'}
		style:top={orientation === 'portrait' ? 'auto' : '50%'}
		style:transform={orientation === 'landscape'
			? `translate(-${clampedPercent}%, -50%)`
			: `translate(-50%, ${clampedPercent}%)`}
	>
		<span class="slider-thumb-current" class:vertical={orientation === 'portrait'}>
			{clampedPercent | 0}
		</span>
	</button>
</div>

<style>
	.slider-track-path {
		touch-action: none;
		overscroll-behavior: none;
		width: 100%;
		height: 0.45rem;
		background: var(--empty-background);
		border-radius: 10dvw;
		position: relative;
		cursor: pointer;
		&.vertical {
			height: 100% !important;
			width: 0.45rem !important;
		}
	}

	.slider-thumb {
		position: absolute;
		top: 50%;
		width: 0.75rem;
		height: 1.75rem;
		transform: translate(-50%, -50%);
		background: var(--primary);
		border-radius: 10dvw;
		border: 3px solid var(--background);
		transition: transform var(--transition-delay);
		user-select: none !important;
		cursor: grab;
		touch-action: none;

		&:active,
		&:focus {
			border: 0px solid var(--background);
			background: var(--primary);
			cursor: grabbing;
			width: 4px;
		}
		&.vertical {
			height: 0.65rem;
			width: 2rem;
			border: 2px solid var(--background);
		}
	}

	.slider-thumb-current {
		position: absolute;
		top: -2rem;
		left: -1rem;
		width: 2.25rem;
		height: 1.5rem;
		background: var(--primary);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 10px;
		opacity: 0.5;
		color: var(--background);
		border-radius: 10dvw;
		opacity: 0;
		z-index: 2;
		pointer-events: none;
		transition: all 0ms;
		&.vertical {
			top: -0.5rem;
			left: -2.75rem;
			width: 2.5rem;
			height: fit-content;
			padding-block: 0.125rem;
			background: var(--primary);
			color: var(--background);
			backdrop-filter: blur(10px);
		}
	}

	.slider-thumb:active .slider-thumb-current,
	.slider-thumb:hover .slider-thumb-current,
	.slider-thumb:focus .slider-thumb-current {
		opacity: 1;
	}

	.slider-track-filled {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background: var(--primary);
		border-radius: 10dvw 0 0 10dvw;
		width: var(--percent);

		&.vertical {
			width: 100%;
			height: var(--percent);
			top: auto;
			bottom: 0;
		}
	}
</style>
