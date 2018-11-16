              
<template>
	                 <!--联络我们下的常见问题页面-->
<div style="position: relative;width: 100%;">
		 <h1>常见问题</h1>
		 <span>联络我们>常见问题</span>
		 <br />
		 <br />
		 <br />        
	<div class="box" style="width: 50%;">
	  <div class="box" style="width: 1000px;">
	  		
	  
		<el-tabs v-model="activeName" @tab-click="handleClick">
			             <!--全部问题-->
			<el-tab-pane label="全部问题" name="first">

				<el-collapse v-model="activeNames" @change="handleChange">
					<el-collapse-item title="1.預定蛋糕需要支付全額嗎？" name="1">
						<p>一般節慶蛋糕不強制全額支付，可接受先支付3成訂金，領取蛋糕當日再結清餘額，發票日期為領取蛋糕當日。而活動期間，例如：母親節蛋糕、父親節蛋糕，因檔</p>
						<p>期折扣因素，提早預購有優惠，需先結清所有款項。</p>

					</el-collapse-item>
					<el-collapse-item title="2.產品購買後是否可退換？" name="2">
						<p>2.產品購買後是否可退換？ 食用產品除非產品本身異常，否則基於食品衛生考量，皆不允退換。</p>
					</el-collapse-item>
					<el-collapse-item title="3.生日蛋糕都沒有折扣嗎?" name="3">
						<p>門市生日蛋糕的訂價，是以高貴又平實的價格回饋給顧客，故不另提供折扣。</p>
					</el-collapse-item>
					<el-collapse-item title="4.蛋糕可以離開冷藏多久? 可以存放幾天?" name="4">
						<p>建議您蛋糕離開冷藏不要超過半個小時，由於蛋糕都是當日新鮮現做後送至門市，故我們建議您盡量當日食用完畢，口感會比較好，若您未食用完，務必要放置冰箱冷藏，敬請在三日內食用完畢，風味最佳。</p>
					</el-collapse-item>
					
					<el-collapse-item title="5.金鑛咖啡的蛋糕使用的是什麼糖?" name="5">
						<p>我們的蛋糕均使用日本進口海藻糖，甜度為砂糖的45%，能有效的降低蛋糕的糖分及油脂，整體減少了30%糖分的使用量，有效的降低人體對於吸收糖量的負擔，熱量較低、容易消化，是非常健康的海藻萃取糖。。</p>
					</el-collapse-item>
					<el-collapse-item title="6.若含有『動物性鮮奶油』的商品，素食者可食用嗎 ?" name="6">
						<p>動物性鮮奶油 (又稱牛奶脂)，是從牛奶中提煉出來的，故”奶蛋素”食者可食用，蛋奶素/全素食者不可食用之油脂屬於『動物油』，EX: 牛油、豬油等。</p>
					</el-collapse-item>
					<el-collapse-item title="7.金鑛咖啡的蛋糕素食者是否可食用?" name="7">
						<p>門市蛋糕及麵包大部分均使用蛋、奶、奶油類素材製成，多半為『奶蛋素』食者可食用，於門市商品架上均有標示，至門市選購時可提供您參考</p>
					</el-collapse-item>
					<el-collapse-item title="8.蛋糕是否可以訂做更大的尺寸? 或特殊造型?" name="8">
						<p>由於我們的蛋糕都由中央工廠每日新鮮現作，統一尺寸及造型製作，目前只提供4吋、6吋及8吋的尺寸，提供您參考。。</p>
					</el-collapse-item>
					<el-collapse-item title="9.熱飲是否可以封口?" name="9">
						<p>門市無封口服務。 熱飲杯有專門設計與杯口吻合之杯蓋，故不提供封膜服務。</p>
					</el-collapse-item>
					<el-collapse-item title="10.訂購蛋糕是否可以直接於門市付款，並請門市人員協助寄送宅配?" name="10">
						<p>因遵守黑貓宅急便之宅配蛋糕要求，蛋糕類產品須至少冷凍ㄧ天 (24H) 成形後才可宅配，避免造成蛋糕外型毀損 或 經宅配途中品質變異之情況，故門市現場蛋糕 - 無法提供宅配代送的服務。</p>
					</el-collapse-item>
					<el-collapse-item title="11.門市預訂蛋糕需要提前幾天? 需要到門市預訂嗎?" name="11">
						<p>如需向門市預訂蛋糕，建議您可提前三天向門市預訂，門市可預先為您預留想要的口味；您可直接至門市櫃檯請服務人員為您填寫預訂單，或打電話至各門市預訂。</p>
					</el-collapse-item>
					<el-collapse-item title="1.我可以使用iPad的Apple Pay付款嗎？" name="1">
						<p>不好意思，目前門市僅接受iPhone、Apple Watch上的Apple Pay支付，其餘裝置皆無法使用。 另外門市支援Google Pay以及Samsung Pay可以使用。</p>
					</el-collapse-item>
					<el-collapse-item title="2.請問我可以使用信用卡付款嗎？" name="2">
						<p>目前僅開放燦坤聯名卡支付，其餘信用卡暫時無法，敬請見諒。</p>
					</el-collapse-item>		
				</el-collapse>
			</el-tab-pane>
                         <!--商品相关-->
           <el-tab-pane label="商品相关" name="second">	
           		<el-collapse v-model="activeNames" @change="handleChange">
					<el-collapse-item title="1.預定蛋糕需要支付全額嗎？" name="1">
						<p>一般節慶蛋糕不強制全額支付，可接受先支付3成訂金，領取蛋糕當日再結清餘額，發票日期為領取蛋糕當日。而活動期間，例如：母親節蛋糕、父親節蛋糕，因檔</p>
						<p>期折扣因素，提早預購有優惠，需先結清所有款項。</p>

					</el-collapse-item>
					<el-collapse-item title="2.產品購買後是否可退換？" name="2">
						<p>2.產品購買後是否可退換？ 食用產品除非產品本身異常，否則基於食品衛生考量，皆不允退換。</p>
					</el-collapse-item>
					<el-collapse-item title="3.生日蛋糕都沒有折扣嗎?" name="3">
						<p>門市生日蛋糕的訂價，是以高貴又平實的價格回饋給顧客，故不另提供折扣。</p>
					</el-collapse-item>
					<el-collapse-item title="4.蛋糕可以離開冷藏多久? 可以存放幾天?" name="4">
						<p>建議您蛋糕離開冷藏不要超過半個小時，由於蛋糕都是當日新鮮現做後送至門市，故我們建議您盡量當日食用完畢，口感會比較好，若您未食用完，務必要放置冰箱冷藏，敬請在三日內食用完畢，風味最佳。</p>
					</el-collapse-item>
					
					<el-collapse-item title="5.金鑛咖啡的蛋糕使用的是什麼糖?" name="5">
						<p>我們的蛋糕均使用日本進口海藻糖，甜度為砂糖的45%，能有效的降低蛋糕的糖分及油脂，整體減少了30%糖分的使用量，有效的降低人體對於吸收糖量的負擔，熱量較低、容易消化，是非常健康的海藻萃取糖。。</p>
					</el-collapse-item>
					<el-collapse-item title="6.若含有『動物性鮮奶油』的商品，素食者可食用嗎 ?" name="6">
						<p>動物性鮮奶油 (又稱牛奶脂)，是從牛奶中提煉出來的，故”奶蛋素”食者可食用，蛋奶素/全素食者不可食用之油脂屬於『動物油』，EX: 牛油、豬油等。</p>
					</el-collapse-item>
					<el-collapse-item title="7.金鑛咖啡的蛋糕素食者是否可食用?" name="7">
						<p>門市蛋糕及麵包大部分均使用蛋、奶、奶油類素材製成，多半為『奶蛋素』食者可食用，於門市商品架上均有標示，至門市選購時可提供您參考</p>
					</el-collapse-item>
					<el-collapse-item title="8.蛋糕是否可以訂做更大的尺寸? 或特殊造型?" name="8">
						<p>由於我們的蛋糕都由中央工廠每日新鮮現作，統一尺寸及造型製作，目前只提供4吋、6吋及8吋的尺寸，提供您參考。。</p>
					</el-collapse-item>
					<el-collapse-item title="9.熱飲是否可以封口?" name="9">
						<p>門市無封口服務。 熱飲杯有專門設計與杯口吻合之杯蓋，故不提供封膜服務。</p>
					</el-collapse-item>
					<el-collapse-item title="10.訂購蛋糕是否可以直接於門市付款，並請門市人員協助寄送宅配?" name="10">
						<p>因遵守黑貓宅急便之宅配蛋糕要求，蛋糕類產品須至少冷凍ㄧ天 (24H) 成形後才可宅配，避免造成蛋糕外型毀損 或 經宅配途中品質變異之情況，故門市現場蛋糕 - 無法提供宅配代送的服務。</p>
					</el-collapse-item>
					<el-collapse-item title="11.門市預訂蛋糕需要提前幾天? 需要到門市預訂嗎?" name="11">
						<p>如需向門市預訂蛋糕，建議您可提前三天向門市預訂，門市可預先為您預留想要的口味；您可直接至門市櫃檯請服務人員為您填寫預訂單，或打電話至各門市預訂。</p>
					</el-collapse-item>
					<el-collapse-item title="1.我可以使用iPad的Apple Pay付款嗎？" name="1">
						<p>不好意思，目前門市僅接受iPhone、Apple Watch上的Apple Pay支付，其餘裝置皆無法使用。 另外門市支援Google Pay以及Samsung Pay可以使用。</p>
					</el-collapse-item>
					<el-collapse-item title="2.請問我可以使用信用卡付款嗎？" name="2">
						<p>目前僅開放燦坤聯名卡支付，其餘信用卡暫時無法，敬請見諒。</p>
					</el-collapse-item>		
				</el-collapse>
			</el-tab-pane>
                          <!--门市服务-->
			<el-tab-pane label="门市服务" name="third">
	
				<el-collapse v-model="activeNames" @change="handleChange">
					<el-collapse-item title="1.我要怎麼分辨直營與加盟門市？" name="1">
						<p>目前全台加盟門市共有17間，包含 台南國賓／嘉義中山／嘉義興業／高雄和平／屏東環球／台南永華／屏東瑞光／屏東東港／高雄博愛／高雄小港／台南北門／台南中華／鹿港中正／高雄廣州／台中霧峰／高雄瑞隆／屏東站前， 其餘門市皆為直營門市</p>

					</el-collapse-item>
					<el-collapse-item title="2.門市有研磨咖啡豆的服務嗎？" name="2">
						<p>有的，門市有提供磨豆服務，但僅限金鑛自家之產品，若有需要請洽各門市服務人員。 備註：為最佳賞味期限及保存因素，咖啡豆研磨後請儘早使用。</p>
					</el-collapse-item>
					<el-collapse-item title="3.門市有提供免費飲用水的服務嗎？" name="3">
						<p>若在門市消費後想索取飲用水時，為了安全衛生考量，請洽門市服務人員索取飲用的小紙杯。 為響應環保，除消費者自行內用飲料飲用完畢後之飲料杯，門市僅提供小紙杯供消費者裝取飲用水。若需其他杯種，大杯冰飲杯需酌收３元原料費，熱飲杯需５元原料費。</p>
					</el-collapse-item>
					<el-collapse-item title="4.金鑛咖啡有在販賣現金券或是商品/飲品券嗎?" name="4">
                         <p>很抱歉! 金鑛咖啡目前尚未販售現金券及商品券，敬請小心查明及分辨。</p>
					</el-collapse-item>
					<el-collapse-item title="5.門市外送距離金額如何計算?" name="5">
                         <p>於門市消費 滿 200 元 即可享有 1 公里內外送服務， (消費滿 400 元 ─ 即享 2 公里內外送服務… 以此累加)； 由於各門市距離您的外送目的地之距離各有不同，或者門市人員認知上有些許落差，如造成您的困擾，我們感到非常的抱歉!! 若您不確定詳細外送金額及距離範圍，請洽詢鄰近之門市 ， 或直接撥打─免付費客服專線：0800-8888-26，由客服人員為您查詢服務。</p>
					</el-collapse-item>
					<el-collapse-item title="6.門市消費滿多少金額才有折扣?" name="6">
                         <p>來店全系列商品 → 單筆消費滿 NT$ 3,000 - 即享 97 折；單筆消費滿 NT$ 6,000 - 即享 95 折 ；單筆消費滿 NT$ 10,000 - 即享 93 折。</p>
					</el-collapse-item>
					
					<el-collapse-item title="7.門市是否有提供無線上網? 需要付費嗎?" name="7">
                         <p>目前全省共有５２家門市，均有提供『無線上網之服務』 您可以至門市櫃台向服務人員詢問無線網路帳號及密碼，設定好後即可馬上使用，我們提供免費的無線上網服務，如有操作上的問題，可洽詢現場服務人員。</p>
					</el-collapse-item>
					<el-collapse-item title="8.可否自行攜帶外食嗎? 可以在客席區抽菸嗎?" name="8">
                         <p>由於客席區為封閉之空間，故我們建議您盡量不要攜帶外食(氣味較重之食物)進入，造成其他客人的不便；因配合政府頒布之法令實行，依據菸害防治法規定，於室內場所一律禁止吸煙，您可以在騎樓客席區休息。</p>
					</el-collapse-item>
					<el-collapse-item title="9.金鑛門市有最低消費額限嗎?" name="9">
                         <p>門市內用最低消費金額 55 元</p>
					</el-collapse-item>
					<el-collapse-item title="10.訂購蛋糕是否可以直接於門市付款，並請門市人員協助寄送宅配?" name="10">
                         <p>因遵守黑貓宅急便之宅配蛋糕要求，蛋糕類產品須至少冷凍ㄧ天 (24H) 成形後才可宅配，避免造成蛋糕外型毀損 或 經宅配途中品質變異之情況，故門市現場蛋糕 - 無法提供宅配代送的服務。</p>
					</el-collapse-item>
					<el-collapse-item title="11.門市預訂蛋糕需要提前幾天? 需要到門市預訂嗎?" name="11">
                         <p>如需向門市預訂蛋糕，建議您可提前三天向門市預訂，門市可預先為您預留想要的口味；您可直接至門市櫃檯請服務人員為您填寫預訂單，或打電話至各門市預訂。</p>
					</el-collapse-item>					
				</el-collapse>
			</el-tab-pane>
                        <!--其它问题-->
			<el-tab-pane label="其它问题" name="fourth">
				<el-collapse v-model="activeNames" @change="handleChange">
					<el-collapse-item title="1.我可以使用iPad的Apple Pay付款嗎？" name="1">
                        <p>不好意思，目前門市僅接受iPhone、Apple Watch上的Apple Pay支付，其餘裝置皆無法使用。 另外門市支援Google Pay以及Samsung Pay可以使用。</p> 
					</el-collapse-item>
					<el-collapse-item title="2.請問我可以使用信用卡付款嗎？" name="2">
                        <p>目前僅開放燦坤聯名卡支付，其餘信用卡暫時無法，敬請見諒。</p> 
					</el-collapse-item>				
				</el-collapse>
			</el-tab-pane>
		</el-tabs>
	   </div>
	 </div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				activeName: 'second',
				activeNames: ['1']

			};
		},
		methods: {
			handleClick(tab, event) {
				//console.log(tab, event);
			},
			handleChange() {

			}

		}
	};
</script>


<style >
	*{
		margin: 0;
		padding: 0;
	}
	
	.issue_nav span {
		/*padding: 20px;*/
		display: inline-block;
		margin: 0px 50px;
		height: 80px;
		width: 100px;
		cursor: pointer;
	}
	 
	.box{
		position: relative;
        left: 0;		
        right: 0;
        bottom: 0;
        top: 0;
        margin: 0 auto;
	}
	
	
	.el-collapse-item__header{
		height: 80px;
		margin-bottom: 20px;
		background-color: #eee;
		line-height: 80px;
	}
	.el-collapse-item__header:hover{
		background-color:rgba(0,0,0,0.02) ;
	}
	
	.el-collapse-item__arrow::before{
	  content: " "!important ;
		
	}
	.el-tabs__nav{
		transform: translate(297px)!important;
	}
</style>