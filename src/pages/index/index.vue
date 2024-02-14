<template>
  <view class="content">
    <view class="banner">
      <swiper class="swiper" indicator-dots="true" autoplay="true" circular="true" interval="2000">
        <swiper-item>
          <image
            src="https://pic.rmb.bdstatic.com/bjh/news/0c9ba14fab58990cf592032559ac98bf.jpeg"
            mode="aspectFill"
          />
        </swiper-item>
        <swiper-item>
          <image
            src="https://pic.rmb.bdstatic.com/bjh/news/e0f92d5a10cf73227913cc8fca7303366725.png"
            mode="aspectFill"
          />
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.banner {
  width: 100%;
}

.swiper {
height: 300rpx;
}

/* .swiper-item {
		display: flex;
    width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	} */

</style>
