<template>
	<div class="flex w-screen h-screen">
		<div class="ltd" ref="ltd">
			<div>
				<span style="--ltd: 1">H</span>
				<span style="--ltd: 2">O</span>
				<span style="--ltd: 3">M</span>
				<span style="--ltd: 4">E</span>
			</div>
			<div>
				<span style="--ltd: 1">H</span>
				<span style="--ltd: 2">O</span>
				<span style="--ltd: 3">M</span>
				<span style="--ltd: 4">O</span>
			</div>
			<div>
				<span style="--ltd: 1">L</span>
				<span style="--ltd: 2">U</span>
				<span style="--ltd: 3">X</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const ltd = ref<HTMLElement | null>(null);

function lightingLetter() {
	if (ltd.value != null) {
		const childElements = ltd.value.children;
		for (let i = 0; i < childElements.length; i++) {
			(childElements[i] as HTMLElement).style.color = '#fff';
			(childElements[i] as HTMLElement).style.textShadow =
				'0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 50px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.8)';
		}
	}
}

function closeingLetter() {
	if (ltd.value != null) {
		const childElements = ltd.value.children;
		for (let i = 0; i < childElements.length; i++) {
			(childElements[i] as HTMLElement).style.color = '#333';
			(childElements[i] as HTMLElement).style.textShadow = 'none';
		}
	}
}

onMounted(() => {
	setTimeout(() => {
		lightingLetter();
		setTimeout(() => closeingLetter(), 2000);
	}, 1000);
	setTimeout(() => {
		lightingLetter();
		setTimeout(() => closeingLetter(), 2000);
	}, 4000);
	setTimeout(() => {
		lightingLetter();
	}, 7000);
});
</script>

<style scoped lang="scss">
.ltd {
	color: #333;
	font-weight: 900;
	font-size: 100px;
}

.ltd span {
	transition: 0.5s;
	transition-delay: calc(var(--ltd) * 0.1s);
}

// .ltd:hover {
// 	color: #fff;
// 	text-shadow:
// 		0 0 10px rgb(255 255 255 / 80%),
// 		0 0 20px rgb(255 255 255 / 80%),
// 		0 0 30px rgb(255 255 255 / 80%),
// 		0 0 50px rgb(255 255 255 / 80%),
// 		0 0 80px rgb(255 255 255 / 80%);
// }
</style>
