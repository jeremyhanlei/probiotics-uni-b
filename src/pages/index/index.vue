<template>
  <view>
    <scroll-view class="svContent" scroll-y="true" show-scrollbar="false">
      <!-- banner轮播图 -->
      <view class="banner">
        <swiper class="swiper" indicator-dots="true" autoplay="true" circular="true" interval="2000">
          <swiper-item>
            <image src="https://pic.rmb.bdstatic.com/bjh/news/0c9ba14fab58990cf592032559ac98bf.jpeg" mode="aspectFill" />
          </swiper-item>
          <swiper-item>
            <image src="https://pic.rmb.bdstatic.com/bjh/news/e0f92d5a10cf73227913cc8fca7303366725.png"
              mode="aspectFill" />
          </swiper-item>
        </swiper>
      </view>

      <!-- 商品列表 -->
      <view class="productList" v-for="product in productList" :key="product.id">
        <image class="productImg" :src="product.product_imgUrl" mode="aspectFill" />
        <view class="productInfo">
          <text class="productName">{{ product.product_name }}</text>
          <view class="productPriceInven">
            <text class="productSalesPrice"><text>¥ </text>{{ product.product_sales_price }}元</text>
            <text class="productInventory"><text>剩余 </text>{{ product.product_inventory }}盒</text>
          </view>
          <text class="productDesc">{{ product.product_desc }}</text>
          <view>
            <text class="productNotes"><text>注：</text>实际价格以结算价格为准</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>


export default {
  data() {
    return {
     
      productList: [
        {
          product_id: 1,
          product_name: "畅健1号",
          product_imgUrl:
            "https://puui.qpic.cn/vpic_cover/z35282gbyhz/z35282gbyhz_1701175195_hz.jpg",
          product_desc:
            "商品描述，我是商品的描述啦啦，哇咔啊咔咔啊哈哈哈噜啦啦啦哈哈哈哈",
          product_sales_price: 100, //销售价
          product_inventory: 9999,
        },
        {
          product_id: 2,
          product_name: "畅健2号",
          product_imgUrl:
            "https://i0.hdslb.com/bfs/archive/5294f0d4f5ae00f7c52774b94239ad74470f12dc.jpg",
          product_desc: "商品描述",
          product_sales_price: 200, //销售价
          product_inventory: 8888,
        },
      ],
    };
  },
  onPullDownRefresh() {

  },
  onLoad() { },
};
</script>

<style>



.svContent {
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* flex-direction: column;
  align-items: center;
  justify-content: center; */
}

.banner {
  width: 100%;
  margin-bottom: 25rpx;
}

.swiper {
  width: 100%;
  /* 高度需要设置在最外层，直接设置在图片上高度无效 */
  height: 350rpx;
}

.swiper swiper-item image {
  /* 设置图片的类选择器宽度无效，所以设置在了元素上，生效了， */
  width: 100%;
}

.productList {
  display: flex;
  /* 设置宽度撑满屏幕 */
  width: 100%;
  flex-direction: row;
  margin-bottom: 25rpx;
}

/* product_list image */
.productImg {
  width: 240rpx;
  height: 240rpx;
  margin-left: 25rpx;
  margin-right: 25rpx;
  /* 保证图片不被右侧布局挤小 */
  flex-shrink: 0;
  border-radius: 0.4rem;
}

.productInfo {
  display: flex;
  /* 创建一个相对定位的上下文，让子元素相对于父元素进行定位 */
  position: relative;
  /* 使用flex布局来垂直居中内容 */
  flex-direction: column;
  /* 让信息栏占据右侧剩余空间 */
  flex-grow: 1;
  /* 保证高度与图片高度一致 */
  height: 240rpx;
  font-size: 0.9rem;
  margin-right: 15rpx;
  padding-right: 10rpx;
  line-height: 1.3rem;
}

/* 商品名称 */
.productName {
  font-weight: bold;
  font-size: 1.1rem;
}

/* 商品价格和剩余数量 */
.productPriceInven {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}

.productPriceInven .productSalesPrice {
  font-size: 1rem;
}

.productInventory {
  color: darkgray;
}

/* 设置商品描述，让其最多显示两行，多出来的部分用...表示 */
.productDesc {
  display: -webkit-box;
  /* 将对象作为弹性伸缩盒子模型显示 */
  -webkit-line-clamp: 2;
  /* 设置最大显示的行数 */
  -webkit-box-orient: vertical;
  /* 设置或检索伸缩盒对象的子元素的排列方式，设置为vertical表示元素将垂直排列。这与flex-direction: column;在标准CSS中的作用相同。 */
  text-overflow: ellipsis;
  /* 可以用来设置多行文本的情况下，用省略号“…”隐藏超出范围的文本  */
  overflow: hidden;
  /* 这行代码隐藏了元素内容的溢出部分。当文本超出.product-desc元素的边界时，这会确保文本不会显示在元素外部。 */
}

/* 备注 */
.productNotes {
  /* 设置子元素固定在父元素的底部 */
  position: absolute;
  bottom: 0;
  color: burlywood;
}
</style>
