# 2016.1.15 review
* ie6看下
* 测试下异常情况
如 header上的 全部... 如果文字多余四个怎么样；offer标题超长怎么样；
* css style guide再看下
```css
color: #444444;
// to
color: #444;

border-top: 1px solid #eaeaea;
border-bottom: 1px solid #eaeaea;
border-right: 1px solid #eaeaea;

// to
border: 1px solid #eaeaea;
border-width: 1px 1px 1px 0;
```
了解下为什么要这样
* 还是还原度
	* header的高度有这么大？特别是全部这块
	* 商品标题和公司名称间距有这么大？
	* 公司名称和底部的间距
自己量好视觉稿，打上标注，对比下
* 抽象
	* 整个楼层12px字体最多，为什么不统一写默认字体12px；其他覆盖？
	* 颜色类似
* 链接一般hover都变色，标明这是个链接
* 语义化
	* floor-header是不是跟floor-content对应的，为什么会有这么多content，floor-show又是什么？
	* 下面的offer是个列表

## 评价
这次第一眼看上去比上次的好多了，像个上线的产品。但是细节还是不够，要做到1像素眼。整合到整个页面的时候再考虑下是否需要优化
