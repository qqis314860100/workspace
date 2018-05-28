<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="posList">
        <el-tabs >
          <el-tab-pane label="订单"  >
            <el-table :data="tableData" border style="width: 100%;">
              <el-table-column prop="goodsName" label="食物"></el-table-column>
              <el-table-column prop="price" label="单价" width="80"></el-table-column>
              <el-table-column prop="count" label="数量" width="60"></el-table-column>
              <el-table-column  label="操作" width="140" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="orderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>总价：</small>{{totalPrice}}&nbsp;<small>数量:</small>{{totalCount}}
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkOut">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            <el-table>
              <el-table-column></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="外卖">
            <el-table>
              <el-table-column></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17" class="hot-goods">
        <div class="hot-good">
          <div class="food-title">热销商品</div>
          <div class="hot-goods-detail">
            <ul>
                <li v-for="goods in hotGoods" @click="orderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">￥{{goods.price}}元</span>
                </li>
            </ul>
          </div>
        </div>

        <div class="foods-type">
          <el-tabs>
            <el-tab-pane label="主食">
              <div>
                <ul class="cookList">
                  <li v-for="food in foods0Type"  @click="orderList(food)">
                   <span class="foodImg"><img :src="food.goodsImg" width="100%"></span>
                    <span class="foodName">{{food.goodsName}}</span>
                    <span class="foodPrice">￥{{food.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
              <el-tab-pane label="小食" >
                <div>
                  <ul class="cookList">
                    <li v-for="food in foods1Type"  @click="orderList(food)">
                      <span class="foodImg"><img :src="food.goodsImg" width="100%"/></span>
                      <span class="foodName">{{food.goodsName}}</span>
                      <span class="foodPrice">￥{{food.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>

              <el-tab-pane label="饮料">
                <div>
                  <ul class="cookList">
                    <li v-for="food in foods2Type"  @click="orderList(food)">
                      <span class="foodImg"><img :src="food.goodsImg" width="100%"/></span>
                      <span class="foodName">{{food.goodsName}}</span>
                      <span class="foodPrice">￥{{food.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>

              <el-tab-pane label="套餐">
                <div>
                  <ul class="cookList">
                    <li v-for="food in foods3Type"  @click="orderList(food)">
                      <span class="foodImg"><img :src="food.goodsImg" width="100%"/></span>
                      <span class="foodName">{{food.goodsName}}</span>
                      <span class="foodPrice">￥{{food.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
          </el-tabs>

        </div>

      </el-col>
    </el-row>
  </div>
</template>
<script>
  import ElTabPane from "../../../node_modules/element-ui/packages/tabs/src/tab-pane.vue";
  import axios from 'axios';
  export default {
    data(){
      return{
        tableData:[],
        hotGoods:[],
        foods0Type:[],
        foods1Type:[],
        foods2Type:[],
        foods3Type:[],
        totalPrice:0,
        totalCount:0
      }
    },
    methods: {
      orderList:function (goods) {
        this.totalPrice=0;
        this.totalCount=0;
        let isHave=false;
        //商品是否已经存在于订单表中
        for(let i=0;i<this.tableData.length;i++){
          if(this.tableData[i].goodsId==goods.goodsId){
            isHave=true;
          }
        }
        //根据判断的值编写业务逻辑
        if(isHave){
          let arr=this.tableData.filter(o=>o.goodsId==goods.goodsId);
          //改变列表中商品数量
          arr[0].count++;
        }else{
          let newData={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
          this.tableData.push(newData);
        }
        //计算总价和总数
        this.tableData.forEach((element=>{
          this.totalPrice=this.totalPrice+element.price*element.count;
          this.totalCount+=element.count;
        }))
      },
      //删除单条商品数据
      delSingleGoods:function (goods) {
        this.tableData=this.tableData.filter(a=>a.goodsId!=goods.goodsId);
        this.relCountPrice();
      },
      //重新汇总数量和金额
      relCountPrice:function () {
         this.totalPrice=0;
         this.totalCount=0;
         if(this.tableData){
          this.tableData.forEach((element)=>{
            this.totalPrice=this.totalPrice+element.count*element.price;
            this.totalCount+=element.count;
          })
         }
      },
      //删除所有数据
      delAllGoods:function () {
        this.totalCount=0;
        this.totalPrice=0;
        this.tableData=[];
      },
      checkOut:function () {
        if(this.totalCount!=0){
          this.totalCount=0;
          this.totalPrice=0;
          this.tableData=[];
          this.$message({
            message:'结账成功，欢迎下次光临！',
            type:'success'
          });
        }else{
          this.$message.error("您还没有选购商品，请选择商品后再结账！");
        }
      }
    },
    created:function () {
      axios.get("http://jspang.com/DemoApi/oftenGoods.php")
        .then(response=> {
          this.hotGoods = response.data;
        })
        .catch(error=>{
          alert("访问错误");
        }),
        axios.get("http://jspang.com/DemoApi/typeGoods.php")
          .then(response=>{
            console.log(response.data);
            this.foods0Type=response.data[0];
            this.foods1Type=response.data[1];
            this.foods2Type=response.data[2];
            this.foods3Type=response.data[3];
          })
          .catch(response=>{
            alert("访问错误");
        })
    },
    name:'pos',
    component:{ElTabPane},
    mounted:function () {
      let posHeight=document.body.clientHeight;
      console.log(posHeight);
      document.getElementById('posList').style.height=posHeight+'px';
    }
  }
</script>
<style>
  #posList{
    width: 30%;
    height:100%;
    background-color:#F9F9F8;
    border-right:1px solid #F9F9F8;
    float: left;
  }
  .div-btn{
    margin-top: 10px;
  }
  .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
    text-align: center;
  }
  .hot-goods{
    width: 70%;
    float: right;
    height:100%;
  }
  .hot-good{
    background-color:#F9FAFC;
  }
  .food-title{
    border-bottom:1px solid #D3dce6;
    background:#F9F9F8;
    height:19px;
    width:100%;
    padding: 10px;
    text-align: left;
    font-weight: bold;
  }
  .hot-goods-detail{

  }
  .hot-goods ul li{
    list-style: none;
    float: left;
    border:1px solid #E5E9F2;
    padding: 10px;
    margin: 10px;
    background: #ffffff;
    cursor:pointer;
  }
  .o-price{
    color:#58b7ff
  }
  .foods-type{
    clear:both;
  }
  .cookList li{
    list-style: none;
    width:20%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;

  }
  .cookList li span{

    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 17px;
    padding-left: 10px;
    color:brown;

  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }
  .el-tabs__nav-scroll{
    background:#FCFCFC;
    border-right: 1px solid silver;
  }

  .totalDiv{
    border-bottom: 1px solid  #E5E9F2;
    background: #fff;
    padding: 10px;

  }
</style>
