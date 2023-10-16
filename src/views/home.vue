<template>
	<div ref="container" class="container relative w-screen h-screen" v-if="showLetter">
		<div class="ltd" ref="ltd">
			<div>
				<span class="left-0 top-80px" style="--ltd: 1">H</span>
				<img
					ref="icon"
					class="opacity-1 absolute left-80px top-80px w-80px translate-y-1/6"
					src="/src/assets/images/o.png"
				/>
				<span ref="iconO" class="left-80px top-80px" style="--ltd: 2">O</span>
				<span class="left-160px top-80px" style="--ltd: 3">M</span>
				<span class="left-250px top-80px" style="--ltd: 4">E</span>
				<span
					class="left-320px top-80px transform translate-y-1/2 ml-100px text-50px"
					style="--ltd: 5"
					>家居</span
				>
			</div>
			<div>
				<span class="left-160px top-200px" style="--ltd: 1">H</span>
				<span class="left-240px top-200px" style="--ltd: 2">O</span>
				<span class="left-320px top-200px" style="--ltd: 3">M</span>
				<span class="left-410px top-200px" style="--ltd: 4">O</span>
				<span
					class="left-480px top-200px transform translate-y-1/2 ml-100px text-50px"
					style="--ltd: 5"
					>和谐</span
				>
			</div>
			<div>
				<span class="left-320px top-320px" style="--ltd: 1">L</span>
				<span class="left-390px top-320px" style="--ltd: 2">U</span>
				<span class="left-480px top-320px" style="--ltd: 3">X</span>
				<span
					class="left-640px top-320px transform translate-y-1/2 ml-100px text-50px"
					style="--ltd: 5"
					>光照</span
				>
			</div>
		</div>
	</div>
	<div class="absolute top-0 left-0 w-screen h-screen">
		<div class="container-1 opacity-0">
			<div class="box">
				<span ref="ltH">H</span>
				<span ref="ltO">O</span>
				<span ref="ltM">M</span>
				<span ref="ltL">L</span>
				<span ref="ltU">U</span>
				<span ref="ltX">X</span>
			</div>
		</div>
		<div class="container-1 absolute left-0 top-0 w-screen h-screen opacity-0">
			<div class="box">
				<span ref="ltH">H</span>
				<img ref="ltI" class="w-80px" src="/src/assets/images/o.png" />
				<span ref="ltM">M</span>
				<span ref="ltL">L</span>
				<span ref="ltU">U</span>
				<span ref="ltX">X</span>
			</div>
		</div>
	</div>
	<div
		class="container-1 relative w-screen min-h-screen bg-#fff flex flex-col items-center"
		v-if="!showLetter"
	>
		<div ref="title" class="box title">
			<span ref="ltH">H</span>
			<img ref="ltI" class="w-80px transform translate-y-1/6" src="/src/assets/images/o.png" />
			<span ref="ltM">M</span>
			<span ref="ltL">L</span>
			<span ref="ltU">U</span>
			<span ref="ltX">X</span>
		</div>
		<p ref="desc" class="text absolute top-2/3 transform -translate-y-1/2">
			美的照明HOMLUX是一款基于微信小程序开发的智能照明控制系统，它包括了美智光电全自研的Zigbee3.0模组、PaaS平台、客户端应用（小程序&APP）边缘网关、智能灯具、智能面板、智能传感器等多个组件。该系统适用于家居智能照明应用场景，并提供多种开放平台接入方案，开发者可以将HOMLUX系统集成到更多应用场景，例如智慧地产、智慧酒店、智慧办公及智慧养老等。该系统无需下载APP即可使用，用户可以直接通过微信小程序进行操作。
		</p>
	</div>
</template>

<script setup lang="ts">
import { delay } from '../utils/common/delay';

const showLetter = ref(true);

const ltd = ref<HTMLElement | null>(null);

function lightingLetter() {
	if (ltd.value != null) {
		const childElements = ltd.value.children;
		for (let i = 0; i < childElements.length; i++) {
			const grandSonElements = childElements[i].children;
			for (let o = 0; o < grandSonElements.length; o++) {
				(grandSonElements[o] as HTMLElement).style.color = '#fff';
				(grandSonElements[o] as HTMLElement).style.textShadow =
					'0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 50px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.8)';
			}
		}
	}
}

function closeingLetter() {
	if (ltd.value != null) {
		const childElements = ltd.value.children;
		for (let i = 0; i < childElements.length; i++) {
			const grandSonElements = childElements[i].children;
			for (let o = 0; o < grandSonElements.length; o++) {
				(grandSonElements[o] as HTMLElement).style.color = '#333';
				(grandSonElements[o] as HTMLElement).style.textShadow = 'none';
			}
		}
	}
}

const ltH = ref<HTMLElement | null>(null);
const ltO = ref<HTMLElement | null>(null);
const ltI = ref<HTMLElement | null>(null);
const ltM = ref<HTMLElement | null>(null);
const ltL = ref<HTMLElement | null>(null);
const ltU = ref<HTMLElement | null>(null);
const ltX = ref<HTMLElement | null>(null);

function transformLetter() {
	if (
		ltH.value != null &&
		ltI.value != null &&
		ltO.value != null &&
		ltM.value != null &&
		ltL.value != null &&
		ltU.value != null &&
		ltX.value != null
	) {
		const transformObj: { [key: string]: { left: number; top: number } } = {
			H: {
				left: ltH.value.getBoundingClientRect().left,
				top: ltH.value.getBoundingClientRect().top
			},
			O: {
				left: ltO.value.getBoundingClientRect().left,
				top: ltO.value.getBoundingClientRect().top
			},
			M: {
				left: ltM.value.getBoundingClientRect().left,
				top: ltM.value.getBoundingClientRect().top
			},
			L: {
				left: ltL.value.getBoundingClientRect().left,
				top: ltL.value.getBoundingClientRect().top
			},
			U: {
				left: ltU.value.getBoundingClientRect().left,
				top: ltU.value.getBoundingClientRect().top
			},
			X: {
				left: ltX.value.getBoundingClientRect().left,
				top: ltX.value.getBoundingClientRect().top
			}
		};
		if (ltd.value != null) {
			const childElements = ltd.value.children;
			for (let i = 0; i < childElements.length; i++) {
				const grandSonElements = childElements[i].children;
				for (let o = 0; o < grandSonElements.length; o++) {
					if (transformObj[(grandSonElements[o] as HTMLElement).innerHTML]) {
						(grandSonElements[o] as HTMLElement).style.left =
							transformObj[(grandSonElements[o] as HTMLElement).innerHTML].left + 'px';
						(grandSonElements[o] as HTMLElement).style.top =
							transformObj[(grandSonElements[o] as HTMLElement).innerHTML].top + 'px';
						if (i == 1) {
							(grandSonElements[o] as HTMLElement).style.display = 'none';
						}
					} else {
						if ((grandSonElements[o] as HTMLElement).tagName === 'SPAN')
							(grandSonElements[o] as HTMLElement).style.display = 'none';
					}
				}
			}
		}
	}
}

const container = ref<HTMLElement | null>(null);
const icon = ref<HTMLElement | null>(null);
const iconO = ref<HTMLElement | null>(null);

function transformBg() {
	if (container.value != null) {
		container.value.style.backgroundColor = '#fff';
	}
	if (ltd.value != null) {
		const childElements = ltd.value.children;
		for (let i = 0; i < childElements.length; i++) {
			const grandSonElements = childElements[i].children;
			for (let o = 0; o < grandSonElements.length; o++) {
				(grandSonElements[o] as HTMLElement).style.color = '#333';
			}
		}
	}
	if (icon.value != null && ltI.value != null) {
		icon.value.style.opacity = '1';
		icon.value.style.left = ltI.value.getBoundingClientRect().left + 'px';
		icon.value.style.top = ltI.value.getBoundingClientRect().top + 'px';
	}
	if (iconO.value != null) {
		iconO.value.style.opacity = '0';
	}
}

const title = ref<HTMLElement | null>(null);
const desc = ref<HTMLElement | null>(null);

function showDesc() {
	if (title.value != null && desc.value != null) {
		title.value.style.top = '25%';
		desc.value.style.opacity = '1';
	}
}

onMounted(async () => {
	// 走灯
	// await delay(1000);
	// lightingLetter();
	// await delay(2000);
	// closeingLetter();
	// await delay(1500);
	// lightingLetter();
	// await delay(2000);
	// closeingLetter();
	// await delay(2000);
	// lightingLetter();
	transformLetter();
	await delay(2000);
	transformBg();
	await delay(1000);
	showLetter.value = false;
	await delay(500);
	showDesc();
	// 变字
});
</script>

<style scoped lang="scss">
.ltd {
	color: #333;
	font-weight: 900;
	font-size: 100px;
}

.ltd span {
	position: absolute;
	transition: 0.5s;
	transition-delay: calc(var(--ltd) * 0.1s);
}

.container {
	transition: 0.5s;
	transition-delay: 0.1s;
}

img {
	transition: 0.5s;
	transition-delay: 0.1s;
}

.container-1 {
	.box {
		position: absolute;
		top: 40%;
		left: 50%;
		letter-spacing: 8px;
		transform: translate(-50%, -50%);
	}

	.title {
		transition: 1.5s;
		transition-delay: 0.5s;
	}

	span {
		color: #333;
		font-weight: 900;
		font-size: 100px;
	}

	.text {
		width: 50%;
		font-size: 18px;
		line-height: 1.5;
		letter-spacing: 2px;
		opacity: 0;
		transition: 1.5s;
		transition-delay: 0.5s;
	}
}
</style>
