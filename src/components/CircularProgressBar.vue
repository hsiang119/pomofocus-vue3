<script setup lang="ts">

// const onActiveTimeCountDown = () => {
//     isActive.value = !isActive.value
//     const countDown = useCountDown(mode.value);
//     excessTime.value = countDown.excessTime.value;
// }
 
//   const radius = ref(90);
//   const center = ref(250);
//   const strokeDashoffset = ref(100);
  
//   const circumference = computed(() => 2 * Math.PI * radius.value);
//   const strokeOffset = computed(() => circumference.value - strokeDashoffset.value);
</script>

<template>
    <!-- 圓形進度條 -->
    <!-- <div class="flex justify-center items-center flex-col">
        
        <svg
            id="svg"
            width="500"
            height="500"
            :viewPort="`${center} ${center} ${radius} ${radius}`"
        >
            <circle
                id="circle"
                :r="radius"
                :cx="center"
                :cy="center"
                fill="transparent"
                :stroke-dasharray="circumference"
                stroke-dashoffset="0"
                class="stroke-[0.3em] stroke-cyan-500"
            >
        
            </circle>
            
            <circle
                id="bar"
                :r="radius"
                :cx="center"
                :cy="center"
                fill="transparent"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="strokeOffset"
                transform="rotate(-155, 250, 250)"
                class="stroke-[0.3em] stroke-cyan-900"
            />
        </svg>
        <button class="border w-[200px] text-3xl rounded-default">
            Start
        </button>
    </div> -->
    
    
    <div></div>
</template>
  

  
<style scoped>

</style>
  